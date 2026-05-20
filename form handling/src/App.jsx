// ========================== App.jsx ==========================

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [search, setSearch] = useState("");

  const debounceRef = useRef(null);

  // ================= FETCH USERS =================

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const updatedUsers = response.data.map((user) => ({
          ...user,
          role: "User",
        }));

        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
      })
      .catch((error) => console.log(error));
  }, []);

  // ================= ADD USER =================

  const addUser = () => {
    if (!name || !email || !role) {
      alert("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      alert("Email must contain @");
      return;
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
      role,
    };

    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);

    setName("");
    setEmail("");
    setRole("");
  };

  // ================= SEARCH WITH DEBOUNCING =================

  const handleSearch = (value) => {
    setSearch(value);

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredUsers(filtered);
      setCurrentPage(1);
    }, 500);
  };

  // ================= PAGINATION =================

  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 4;

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const currentUsers = filteredUsers.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // ================= UI =================

  return (
    <div className="app">
      <h1 className="heading">User Dashboard</h1>

      {/* ================= FORM ================= */}

      <div className="form-container">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button onClick={addUser}>Add User</button>
      </div>

      {/* ================= SEARCH ================= */}

      <div className="search-container">
        <input
          type="text"
          placeholder="Search User..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* ================= USERS ================= */}

      <div className="users-container">
        {currentUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>

            <p>{user.email}</p>

            <span>{user.role}</span>
          </div>
        ))}
      </div>

      {/* ================= PAGINATION ================= */}

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <p>
          Page {currentPage} of {totalPages}
        </p>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;