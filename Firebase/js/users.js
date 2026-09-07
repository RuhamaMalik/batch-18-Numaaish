import { collection, getDocs, db, onSnapshot, doc, updateDoc, deleteDoc, query, where, or, and, orderBy } from "../firebase.config.js";


let getUser = async () => {
    try {
        // const querySnapshot = await getDocs(collection(db, "users"));
        // let users = []
        // querySnapshot.forEach((doc) => {
        //     users.push({ ...doc.data(), id: doc.id })
        // });
        // return users;



        // //////////////////// get all users real time update

        // let userRef = collection(db, "users")

        // onSnapshot(userRef, (querySnapshot) => {
        //     const _users = [];
        //     querySnapshot.forEach((doc) => {
        //         _users.push({ ...doc.data(), id: doc.id });
        //     });

        //     users = _users
        //     filteredUsers = [...users]
        //     renderTable();
        // });







 //////////////////// simple and compound queries ////////////////////

        let userRef = collection(db, "users");

    //   let q =  query(userRef,  where("role", "!=", 'admin'))
    //   let q =  query(userRef,  where("country", "array-contains","China"))
    //   let q =  query(userRef,  where("skills", "array-contains-any", ['firebase',"js"]))
    //   let q =  query(userRef,  where("country", "in", ["China","Pakistan"]))
      let q =  query(userRef,  where("country", "in", ["China","Pakistan"]),orderBy('email','desc'))


    //   let q =  query(userRef,   or(where('isActive', '==', true),
    //  where('country', '==', 'Pakistan') ))


    //   let q =  query(userRef,   and(where('isActive', '==', true),
    //  where('country', '==', 'Pakistan') ))

    
        onSnapshot(q, (querySnapshot) => {
            const _users = [];
            querySnapshot.forEach((doc) => {
                _users.push({ ...doc.data(), id: doc.id });
            });

            users = _users
            filteredUsers = [...users]
            renderTable();
        });







    } catch (error) {
        console.log(error.message);

    }
}


/////////////////////////// Update Status start/////////////////////////////

let updateStatus = async (uid, currentStatus) => {
    try {
        let status = currentStatus === 'true' || currentStatus === true
        await updateDoc(doc(db, "users", uid), {
            isActive: !status
        });

    } catch (error) {
        console.log(error.message);

    }
}

/////////////////////////// Update Status end/////////////////////////////
/////////////////////////// Delete User start/////////////////////////////

let deleteUser = async (uid) => {
    try {
        await deleteDoc(doc(db, "users", uid));
    } catch (error) {
        console.log(error.message);
    }
}

/////////////////////////// Delete User end/////////////////////////////



// Sample Data
// const users = [
//   { id: 1, name: "Ali Khan", email: "ali@example.com", role: "Admin", status: "Active" },
//   { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "User", status: "Active" },
//   { id: 3, name: "Usman Raza", email: "usman@example.com", role: "Editor", status: "Inactive" },
//   { id: 4, name: "Zainab Bibi", email: "zainab@example.com", role: "User", status: "Active" },
//   { id: 5, name: "Hamza Malik", email: "hamza@example.com", role: "User", status: "Inactive" },
//   { id: 6, name: "Bilal Sheikh", email: "bilal@example.com", role: "Editor", status: "Active" },
//   { id: 7, name: "Ayesha Noor", email: "ayesha@example.com", role: "User", status: "Active" },
//   { id: 8, name: "Omer Farooq", email: "omer@example.com", role: "User", status: "Inactive" }
// ];



let currentPage = 1;
const rowsPerPage = 3;
let users = [];
let filteredUsers = [...users];

const tableBody = document.getElementById("userTableBody");
const searchInput = document.getElementById("searchInput");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");


/////////////////////////////  Event Delegation

tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('status-btn')) {
        let id = e.target.getAttribute('data-id');
        let currentStatus = e.target.getAttribute('currentStatus');
        updateStatus(id, currentStatus);
    }

    if (e.target.classList.contains('delete-btn')) {
        let id = e.target.getAttribute('data-id');
        deleteUser(id);
    }
})



function renderTable() {
    tableBody.innerHTML = "";

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedUsers = filteredUsers.slice(start, end);

    if (paginatedUsers.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No users found</td></tr>`;
        return;
    }

    paginatedUsers.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td><span class="status ${user?.status?.toLowerCase()}">${user.isActive ? 'Active' : 'Blocked'}</span></td>
          <td><button id="sBtn" data-id="${user.id}" currentStatus="${user.isActive}" class=" status-btn   status ">update status</button>
         <button id="dBtn" data-id="${user.id}" class=" delete-btn status ">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredUsers.length / rowsPerPage) || 1;
    pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Search Filter Event
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderTable();
});

// Pagination Events
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
});

nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
});

// Initial Render

renderTable();

// let loadUsers = async ()=>{
//   users = await getUser();
//   filteredUsers = [...users]
//   renderTable();
// }


// loadUsers();

getUser()
