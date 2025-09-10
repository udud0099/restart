"use client";

import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [dep, setDep] = useState("");

  const addData = async (e) => {
    e.preventDefault(); // prevent form reload
    let data = await fetch("http://localhost:3000/api/db-emp", {
      method: "POST",
      body: JSON.stringify({ name, salary, dep }),
    });
    data = await data.json();
    if (data.success) {
      console.log("add data");
    } else {
      console.log("try again");
    }
  };
  return (
    <div>
      <h1>save data</h1>
      <form>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br /> <br />
        <input
          placeholder="salary"
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />{" "}
        <br /> <br />
        <input
          placeholder="dep"
          type="text"
          value={dep}
          onChange={(e) => setDep(e.target.value)}
        />{" "}
        <br /> <br />
        <button onClick={addData}>save</button>
      </form>
    </div>
  );
};

export default page;
