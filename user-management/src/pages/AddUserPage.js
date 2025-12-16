import React from 'react';
import AddUser from '../components/AddUser';

const AddUserPage = ({ onAddUser }) => {
  return (
    <div>
      <h1>Add User</h1>
      <AddUser onAddUser={onAddUser} />
    </div>
  );
};

export default AddUserPage;