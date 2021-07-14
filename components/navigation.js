import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/about",
              query: {
                firstName: "Jubayer",
                lastName: "Khan",
              },
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
