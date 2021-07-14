import React from "react";
import Navigation from "../components/navigation";
import Head from "next/head";

const Blog = () => {
  return (
    <div>
      <Head>
        {/* title */}
        <title>Blog</title>
      </Head>
      <Navigation />
      <h2>Blog</h2>
    </div>
  );
};

export default Blog;
