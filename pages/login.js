import React from "react";
import Navigation from "../components/navigation";
import Head from "next/head";
import Router from "next/router";

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
      <button onClick={() => Router.push("/contact")}>Go to Contact</button>
    </div>
  );
};

export default Login;
