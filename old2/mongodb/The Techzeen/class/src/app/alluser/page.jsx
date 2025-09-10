import Link from "next/link";
import React from "react";
import DeleteUser from "../components/DeleteUser";

const getData = async () => {
  let data = await fetch("http://localhost:3000/api/db-emp", {
    cache: "no-store",
  });
  data = await data.json();
  
  return data.result;
};
const getUsres = async () => {
  const userss = await getData();
  // console.log(userss);

  return (
    <div>
      <h2>git all data</h2>
      <br />
      {userss.map((item, index) => (
        <div key={index}>
          <h1>{item._id}</h1>
          <h1>{item.name}</h1>
          <br />
          <Link href={`alluser/${item._id}`}>e</Link>
          <br />
          <DeleteUser id={item._id} />

          <br /> <br />
        </div>
      ))}
    </div>
  );
};

export default getUsres;
