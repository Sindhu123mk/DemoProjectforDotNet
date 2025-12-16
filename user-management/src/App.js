import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddUserPage from './pages/AddUserPage';
import ListUsersPage from './pages/ListUsersPage';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Router>
      <nav>
        <Link to="/add-user">Add User</Link> | <Link to="/list-users">List Users</Link>
      </nav>
      <Routes>
        <Route path="/add-user" element={<AddUserPage onAddUser={handleAddUser} />} />
        <Route path="/list-users" element={<ListUsersPage users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;