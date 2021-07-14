import React, { useEffect } from "react";
import Navigation from "../components/navigation";
import Head from "next/head";
import { withRouter } from "next/router";
import axios from "axios";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
    if (res?.status === 200 && res?.data) {
      return {
        props: {
          countryList: res?.data,
        },
      };
    }
  } catch (error) {
    console.log(error?.message);
  }
};

const About = withRouter(({ countryList, router }) => {
  console.log("countryList", countryList[0]);
  console.log("router", router);
  return (
    <div>
      <Head>
        {/* title */}
        <title>About</title>
      </Head>
      <Navigation />
      <h2>This is About of {router.query.firstName}</h2>
      <img src="images/laptop.jpg" alt="laptop" width="400" height="400" />
    </div>
  );
});

export default About;
