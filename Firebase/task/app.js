import {
  auth, db, googleProvider, CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET,
  signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, sendPasswordResetEmail, onAuthStateChanged, collection, addDoc,
  getDocs, getDoc, doc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp,
  arrayUnion, arrayRemove
} from "./firebase-config.js";

let currentUser = null;
let isSignUpMode = false;
let allBlogsData = [];

// --- Auth State Change Listener ---
onAuthStateChanged(auth, (user) => {
  currentUser = user;
  const openAuthBtn = document.getElementById("openAuthBtn");
  const openCreateModalBtn = document.getElementById("openCreateModalBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    if (openAuthBtn) openAuthBtn.style.display = "none";
    if (openCreateModalBtn) openCreateModalBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (openAuthBtn) openAuthBtn.style.display = "inline-block";
    if (openCreateModalBtn) openCreateModalBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";
  }

  // Page Specific Execution
  if (document.getElementById("blogsContainer")) fetchBlogs();
  if (document.getElementById("blogDetail")) loadBlogDetail();
  if (document.getElementById("bookmarksContainer")) loadBookmarks();
});

// --- Dark Mode Toggle ---
const themeToggleBtn = document.getElementById("themeToggleBtn");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}

// --- Auth Modals & Operations ---
const authModal = document.getElementById("authModal");
const openAuthBtn = document.getElementById("openAuthBtn");
const closeAuthModal = document.getElementById("closeAuthModal");
const toggleAuthMode = document.getElementById("toggleAuthMode");
const forgotPassLink = document.getElementById("forgotPassLink");

if (openAuthBtn) openAuthBtn.onclick = () => authModal.style.display = "flex";
if (closeAuthModal) closeAuthModal.onclick = () => authModal.style.display = "none";

if (toggleAuthMode) {
  toggleAuthMode.onclick = (e) => {
    e.preventDefault();
    isSignUpMode = !isSignUpMode;
    document.getElementById("authTitle").innerText = isSignUpMode ? "Sign Up" : "Login";
    document.getElementById("authSubmitBtn").innerText = isSignUpMode ? "Register" : "Sign In";
    toggleAuthMode.innerText = isSignUpMode ? "Already have an account? Login" : "Don't have an account? Sign Up";
  };
}

// Authentication Handlers
const authForm = document.getElementById("authForm");
if (authForm) {
  authForm.onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("authEmail").value;
    const password = document.getElementById("authPassword").value;

    try {
      if (isSignUpMode) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      authModal.style.display = "none";
    } catch (err) { alert(err.message); }
  };
}

// Google Authentication
const googleAuthBtn = document.getElementById("googleAuthBtn");
if (googleAuthBtn) {
  googleAuthBtn.onclick = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      authModal.style.display = "none";
    } catch (err) { alert(err.message); }
  };
}

// Forgot Password
if (forgotPassLink) {
  forgotPassLink.onclick = async (e) => {
    e.preventDefault();
    const email = prompt("Enter your email for password recovery:");
    if (email) {
      try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent!");
      } catch (err) { alert(err.message); }
    }
  };
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) logoutBtn.onclick = () => signOut(auth);

// --- Cloudinary Image Upload Helper ---
async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(CLOUDINARY_URL, { method: "POST", body: formData });
  const data = await res.json();
  return data.secure_url;
}

// --- Create/Edit Blog ---
const blogModal = document.getElementById("blogModal");
const openCreateModalBtn = document.getElementById("openCreateModalBtn");
const closeBlogModal = document.getElementById("closeBlogModal");
const blogForm = document.getElementById("blogForm");

if (openCreateModalBtn) {
  openCreateModalBtn.onclick = () => {
    document.getElementById("blogId").value = "";
    blogForm.reset();
    document.getElementById("blogModalTitle").innerText = "Create Blog Post";
    blogModal.style.display = "flex";
  };
}
if (closeBlogModal) closeBlogModal.onclick = () => blogModal.style.display = "none";

if (blogForm) {
  blogForm.onsubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return alert("Please Login First");

    const blogId = document.getElementById("blogId").value;
    const title = document.getElementById("postTitle").value;
    const category = document.getElementById("postCategory").value;
    const content = document.getElementById("postContent").value;
    const imageFile = document.getElementById("postImage").files[0];

    try {
      let imageUrl = "";
      if (imageFile) {
        imageUrl = await uploadToCloudinary(imageFile);
      }

      if (blogId) {
        // Edit Blog
        const updateData = { title, category, content };
        if (imageUrl) updateData.imageUrl = imageUrl;
        await updateDoc(doc(db, "blogs", blogId), updateData);
      } else {
        // Create Blog
        await addDoc(collection(db, "blogs"), {
          title, category, content,
          imageUrl: imageUrl || "https://via.placeholder.com/600x300",
          authorName: currentUser.displayName || currentUser.email.split('@')[0],
          authorId: currentUser.uid,
          likes: [],
          bookmarks: [],
          createdAt: serverTimestamp()
        });
      }

      blogModal.style.display = "none";
      blogForm.reset();
      fetchBlogs();
    } catch (err) { alert(err.message); }
  };
}

// --- Read & Display Blogs ---
async function fetchBlogs() {
  const container = document.getElementById("blogsContainer");
  if (!container) return;

  try {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    allBlogsData = [];
    container.innerHTML = "";

    snapshot.forEach(docSnap => {
      allBlogsData.push({ id: docSnap.id, ...docSnap.data() });
    });

    renderBlogs(allBlogsData);
  } catch (err) { container.innerHTML = "Error loading blogs."; }
}

function renderBlogs(blogs, section) {
  let container;
  if (section === 'bookmark') {
    container = document.getElementById("bookmarksContainer")
  } else {
    container = document.getElementById("blogsContainer");
  }
  if (container) {
    container.innerHTML = "";

    if (blogs.length === 0) {
      container.innerHTML = "<p>No blogs found.</p>";
      return;
    }

    blogs.forEach(blog => {
      const card = document.createElement("div");
      card.className = "blog-card";
      const isAuthor = currentUser && currentUser.uid === blog.authorId;

      card.innerHTML = `
      <img src="${blog.imageUrl}" alt="Blog Image">
      <div class="blog-card-body">
        <div class="card-meta">
          <span>${blog.category}</span>
          <span>By ${blog.authorName}</span>
        </div>
        <h3>${blog.title}</h3>
        <p>${blog.content.substring(0, 80)}...</p>
        <a href="blog-detail.html?id=${blog.id}" class="btn btn-primary">Read More</a>
        ${isAuthor ? `
          <button onclick="editBlog('${blog.id}')" class="btn">Edit</button>
          <button onclick="deleteBlog('${blog.id}')" class="btn btn-danger">Delete</button>
        ` : ''}
      </div>
    `;
      container.appendChild(card);

    });
  }
  // GSAP Animations
  gsap.to(".blog-card", { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 });
}

// --- Search & Filter Handlers ---
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function applyFilters() {
  const term = searchInput ? searchInput.value.toLowerCase() : "";
  const cat = categoryFilter ? categoryFilter.value : "All";

  const filtered = allBlogsData.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(term) ||
      b.authorName.toLowerCase().includes(term) ||
      b.content.toLowerCase().includes(term);
    const matchesCat = cat === "All" || b.category === cat;
    return matchesSearch && matchesCat;
  });

  renderBlogs(filtered);
}

if (searchInput) searchInput.oninput = applyFilters;
if (categoryFilter) categoryFilter.onchange = applyFilters;

// --- Edit / Delete Functions ---
window.editBlog = (id) => {
  const blog = allBlogsData.find(b => b.id === id);
  if (!blog) return;

  document.getElementById("blogId").value = blog.id;
  document.getElementById("postTitle").value = blog.title;
  document.getElementById("postCategory").value = blog.category;
  document.getElementById("postContent").value = blog.content;

  document.getElementById("blogModalTitle").innerText = "Edit Blog Post";
  blogModal.style.display = "flex";
};

window.deleteBlog = async (id) => {
  if (confirm("Are you sure you want to delete this blog?")) {
    await deleteDoc(doc(db, "blogs", id));
    fetchBlogs();
  }
};

// --- Blog Details Page Logic ---
async function loadBlogDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');
  if (!blogId) return;

  const docSnap = await getDoc(doc(db, "blogs", blogId));
  if (!docSnap.exists()) return;

  const blog = docSnap.data();
  const detailDiv = document.getElementById("blogDetail");

  detailDiv.innerHTML = `
    <h1>${blog.title}</h1>
    <p class="card-meta">By ${blog.authorName} | Category: ${blog.category}</p>
    <img src="${blog.imageUrl}" alt="Blog Cover" />
    <p style="margin-top: 20px; line-height: 1.8;">${blog.content}</p>
  `;

  document.getElementById("likeCount").innerText = blog.likes ? blog.likes.length : 0;

  // Like Toggle
  document.getElementById("likeBtn").onclick = async () => {
    if (!currentUser) return alert("Please Login");
    const blogRef = doc(db, "blogs", blogId);
    const isLiked = blog.likes && blog.likes.includes(currentUser.uid);

    await updateDoc(blogRef, {
      likes: isLiked ? arrayRemove(currentUser.uid) : arrayUnion(currentUser.uid)
    });
    location.reload();
  };

  // Bookmark Toggle
  document.getElementById("bookmarkBtn").onclick = async () => {
    if (!currentUser) return alert("Please Login");
    const blogRef = doc(db, "blogs", blogId);
    const isBookmarked = blog.bookmarks && blog.bookmarks.includes(currentUser.uid);

    await updateDoc(blogRef, {
      bookmarks: isBookmarked ? arrayRemove(currentUser.uid) : arrayUnion(currentUser.uid)
    });
    alert(isBookmarked ? "Removed from bookmarks" : "Bookmarked successfully!");
  };

  // Social Sharing
  document.getElementById("shareFb").onclick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, '_blank');
  };
  document.getElementById("shareWa").onclick = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(location.href)}`, '_blank');
  };

  loadComments(blogId);
}

// --- Comments System ---
async function loadComments(blogId) {
  const commentsList = document.getElementById("commentsList");
  const commentForm = document.getElementById("commentForm");

  if (commentForm) {
    commentForm.onsubmit = async (e) => {
      e.preventDefault();
      if (!currentUser) return alert("Login to comment");

      const text = document.getElementById("commentText").value;
      await addDoc(collection(db, "blogs", blogId, "comments"), {
        text,
        userName: currentUser.displayName || currentUser.email.split('@')[0],
        createdAt: serverTimestamp()
      });
      document.getElementById("commentText").value = "";
      loadComments(blogId);
    };
  }

  const q = query(collection(db, "blogs", blogId, "comments"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  commentsList.innerHTML = "";

  snapshot.forEach(docSnap => {
    const c = docSnap.data();
    commentsList.innerHTML += `
      <div class="comment-item">
        <strong>${c.userName}</strong>
        <p>${c.text}</p>
      </div>
    `;
  });
}

// --- Load Bookmarks ---
async function loadBookmarks() {
  const container = document.getElementById("bookmarksContainer");
  if (!container || !currentUser) return;

  const q = query(collection(db, "blogs"), where("bookmarks", "array-contains", currentUser.uid));
  const snapshot = await getDocs(q);
  const bookmarkedBlogs = [];

  snapshot.forEach(docSnap => bookmarkedBlogs.push({ id: docSnap.id, ...docSnap.data() }));
  // snapshot.forEach(docSnap => console.log(docSnap.data())
  // );
  // console.log(bookmarkedBlogs);

  renderBlogs(bookmarkedBlogs, 'bookmark');
}