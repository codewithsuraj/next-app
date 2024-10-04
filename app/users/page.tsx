import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Params {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Params) => {
  return (
    <>
      <h1>Users {sortOrder}</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
