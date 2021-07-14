import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "../../../components/navigation";

const SingleBlog = () => {
  const router = useRouter();
  const blogId = router?.query?.blogId;
  return (
    <div>
      <Head>
        {/* title */}
        <title>Blog</title>
      </Head>
      <Navigation />
      <h2>Blog {blogId}</h2>
    </div>
  );
};

export default SingleBlog;
