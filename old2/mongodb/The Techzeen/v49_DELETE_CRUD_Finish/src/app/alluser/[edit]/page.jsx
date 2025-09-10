"use client";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

const page = ({ params }) => {
  const router = useRouter();
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

  const updateData = async () => {
    let data = await fetch(`http://localhost:3000/api/db-emp/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, salary, dep }),
    });
    data = await data.json();
    if (data.success) {
      alert("ok");
      router.push("/alluser");
    } else {
      alert("not ok");
    }
  };

  return (
    <div>
      <h1>update data</h1>
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
      <button onClick={updateData}>save</button>
    </div>
  );
};

export default page;
