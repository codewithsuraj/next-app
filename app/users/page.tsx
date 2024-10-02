import React from "react";
import UserTable from "./UserTable";

interface Params {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Params) => {
  return (
    <>
      <h1>Users {sortOrder}</h1>
      <UserTable sortOrder={sortOrder}/>
    </>
  );
};

export default UsersPage;
