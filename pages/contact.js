import React from "react";
import Navigation from "../components/navigation";
import Head from "next/head";
import axios from "axios";

export const getServerSideProps = async () => {
  const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
  return {
    props: {
      countryArray: res?.data,
    },
  };
  // try {
  //     const res = await axios.get(
  //       `https://restcountries.eu/rest/v2/all`
  //     );
  //     if (res?.status === 200 && res?.data) {
  //         // return {
  //         //     props: {
  //         //         countryArray: res?.data
  //         //     }
  //         // }
  //     }
  // } catch (error) {
  //     console.log(error?.message);
  // }
};

const Contact = ({ countryArray }) => {
  console.log("countryList", countryArray[13]);
  return (
    <div>
      <Head>
        {/* title */}
        <title>Contact</title>
      </Head>
      <Navigation />
      <h2>This is Contact page</h2>
    </div>
  );
};

export default Contact;
