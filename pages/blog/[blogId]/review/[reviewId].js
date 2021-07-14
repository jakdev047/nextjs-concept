import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "../../../../components/navigation";

const BlogReview = () => {
  const router = useRouter();
  const { blogId, reviewId } = router?.query;
  return (
    <div>
      <Head>
        {/* title */}
        <title>Blog</title>
      </Head>
      <Navigation />
      <h2>
        Review {reviewId} for Blog {blogId}
      </h2>
    </div>
  );
};

export default BlogReview;
