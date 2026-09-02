import { collection, getDocs,db } from "../firebase.config.js";

// const users = [
//     { id: 1, name: "Ali Khan", email: "ali@example.com", role: "Admin", status: "Active" },
//     { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "User", status: "Active" },
//     { id: 3, name: "Usman Raza", email: "usman@example.com", role: "Editor", status: "Inactive" },
//     { id: 4, name: "Zainab Bibi", email: "zainab@example.com", role: "User", status: "Active" },
//     { id: 5, name: "Hamza Malik", email: "hamza@example.com", role: "User", status: "Inactive" },
//     { id: 6, name: "Bilal Sheikh", email: "bilal@example.com", role: "Editor", status: "Active" },
//     { id: 7, name: "Ayesha Noor", email: "ayesha@example.com", role: "User", status: "Active" },
//     { id: 8, name: "Omer Farooq", email: "omer@example.com", role: "User", status: "Inactive" }
// ];

//////////////////////// get all users

let getUser = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        
        let users = []
        
    querySnapshot.forEach((doc) => {
            
            console.log(doc.id, " => ", doc.data());
           users.push({...doc.data(), id:doc.id})
        });

        return users;
       
    } catch (error) {
        console.log(error.message);

    }
}





// let currentPage = 1;
// const rowsPerPage = 5;
// let filteredUsers = [...users];
let filteredUsers = [];

const tableBody = document.getElementById("userTableBody");
const searchInput = document.getElementById("searchInput");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// const pageIndicator = document.getElementById("pageIndicator");





async function renderTable() {
let users = await getUser()
// console.log(users);
    tableBody.innerHTML = "";

    // const start = (currentPage - 1) * rowsPerPage;
    // const end = start + rowsPerPage;
    // const paginatedUsers = filteredUsers.slice(start, end);

    // if (paginatedUsers.length === 0) {
    //     tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No users found</td></tr>`;
    //     return;
    // }

    filteredUsers.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td><span class="status ${user.status?.toLowerCase()}">${user.status}</span></td>
        `;
        tableBody.appendChild(row);
    });

    // updatePagination();
}

// function updatePagination() {
//     const totalPages = Math.ceil(filteredUsers.length / rowsPerPage) || 1;
//     pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;

//     prevBtn.disabled = currentPage === 1;
//     nextBtn.disabled = currentPage === totalPages || totalPages === 0;
// }

// Search Filter Event
searchInput.addEventListener("input",  (e) => {
    const query = e.target.value.toLowerCase();
    filteredUsers =  filteredUsers?.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
    // currentPage = 1;
    renderTable();
});

// Pagination Events
// prevBtn.addEventListener("click", () => {
//     if (currentPage > 1) {
//         currentPage--;
//         renderTable();
//     }
// });

// nextBtn.addEventListener("click", () => {
//     const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
//     if (currentPage < totalPages) {
//         currentPage++;
//         renderTable();
//     }
// });

// Initial Render
renderTable();