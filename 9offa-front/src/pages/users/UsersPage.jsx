import React from "react";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { Loading } from "../../components/loading/Loading";
import { ErrorUI } from "../../components/error/Error";
import { UsersList } from "../../components/users-list/UsersList";

export const UsersPage = () => {
  const { Users, Error, isLoading, FetchUsers } = useFetchUsers();

  return (
    <>
      {isLoading && <Loading />}

      {Error && <ErrorUI />}

      {Users && <UsersList users={Users} refetch={FetchUsers} />}
    </>
  );
};
