import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "../../components/navigation";

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router?.query;
  console.log("params", params);
  return (
    <div>
      <Head>
        {/* title */}
        <title>Docs</title>
      </Head>
      <Navigation />

      {params.length === 2 ? (
        <>
          <h2>
            Viewing docs for feature {params[0]} and concept {params[1]}
          </h2>
        </>
      ) : params.length === 1 ? (
        <>
          <h2>Viewing docs for feature {params[0]}.</h2>
        </>
      ) : (
        <h2>Docs Page </h2>
      )}
    </div>
  );
};

export default Docs;
