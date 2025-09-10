"use client";
import { use, useEffect, useState } from "react";

const page = ({ params }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [dep, setDep] = useState("");

  const { edit: id } = use(params);

  useEffect(() => {
    const userDet = async () => {
      let data = await fetch(`http://localhost:3000/api/db-emp/${id}`);
      data = await data.json();

      let response = data.result;
      console.log(data, "check");
      setName(response.name);
      setSalary(response.salary);
      setDep(response.dep);
    };
    userDet();
  }, [id]);

  return (
    <div>
      <h1>update data</h1>
      <form>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
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
        <button>save</button>
      </form>
    </div>
  );
};

export default page;
