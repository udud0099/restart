import React from "react";

const getData = async () => {
  let data = await fetch("http://localhost:3000/api/db-emp");
  data = await data.json();
  return data.result;
};
const getUsres = async () => {
  const userss = await getData();
  console.log(userss);

  return (
    <div>
      <h2>git all data</h2>
      <br />
      {userss.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  );
};

export default getUsres;
