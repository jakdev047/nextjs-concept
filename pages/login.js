import React from "react";
import Navigation from "../components/navigation";
import Head from "next/head";

export const getStaticProps = async () => {
  return {
    props: {
      BASEAPIURL: process.env.BASEAPIURL,
    },
  };
};

const Login = ({ BASEAPIURL }) => {
  console.log("BASE_API_URL", BASEAPIURL);
  return (
    <div>
      <Head>
        {/* title */}
        <title>Login</title>
      </Head>
      <Navigation />
      <h2>This is Login page</h2>
    </div>
  );
};

export default Login;
