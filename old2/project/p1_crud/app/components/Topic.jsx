import Link from "next/link";
import React from "react";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("fail to load data");
    }
    return res.json();
  } catch (error) {
    console.log("erron loding data", error);
  }
};

const Topic = async () => {
  const { topics } = await getTopics();
  console.log(topics);

  return (
    <div>
      Topic
      <br />
      {topics.map((item, index) => (
        <div key={item._id}>
          <h1>{item.title}</h1>
          <br />
          <p>{item.des}</p>

          <br />
          <br />
          <div>
            <span>
              <Link href={`/editTopic/${item._id}`}>e</Link> 
            </span>
            <span>d</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topic;
