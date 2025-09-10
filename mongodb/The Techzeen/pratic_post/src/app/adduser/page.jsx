"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const savedata = async (e) => {
    e.preventDefault(); // prevent form reload
    let data = await fetch("http://localhost:3000/api/userData", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    data = await data.json();
  };
  return (
    <>
      <h1>add user</h1>

      <form>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <button onClick={savedata}>save</button>
      </form>
    </>
  );
};

export default page;
