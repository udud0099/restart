"use client";

import { useRouter } from "next/navigation";

const DeleteUser = ({ id }) => {
  const router = useRouter();
  const deleteInfo = async () => {
    let data = await fetch(`http://localhost:3000/api/db-emp/${id}`, {
      method: "DELETE",
    });
    data = await data.json();
    router.push("/alluser");
  };
  return (
    <>
      <button onClick={deleteInfo}>delete</button>
    </>
  );
};

export default DeleteUser;
