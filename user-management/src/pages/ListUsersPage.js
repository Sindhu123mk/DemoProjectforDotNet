import React from 'react';
import ListUsers from '../components/ListUsers';

const ListUsersPage = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>
      <ListUsers users={users} />
    </div>
  );
};

export default ListUsersPage;