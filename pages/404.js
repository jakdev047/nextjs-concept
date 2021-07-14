import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <div>
      <Head>
        {/* title */}
        <title>404</title>
      </Head>
      <h2>404 Error</h2>
      <button onClick={() => goHome()}>Go to Home</button>
    </div>
  );
};

export default Login;
