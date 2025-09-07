import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href="/">home</Link>
      <br />
      <Link href="/addTopic">add topic</Link>
    </div>
  );
};

export default Navbar;
