import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Acceuil</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
