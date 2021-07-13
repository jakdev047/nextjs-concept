import React from 'react';
import Navigation from '../components/navigation';
import Head from 'next/head';
import axios from 'axios';

export  const getStaticProps = async () =>  {
    try {
        const res = await axios.get(
          `https://restcountries.eu/rest/v2/all`
        );
        if (res?.status === 200 && res?.data) {
            return {
                props: {
                    countryList: res?.data
                }
            }
        }
    } catch (error) {
        console.log(error?.message);
    }
}

const About = ({countryList}) => {
    console.log('countryList',countryList[0]);
    return (
        <div>
            <Head>
                {/* title */}
                <title>About</title>
            </Head>
            <Navigation />
            <h2>This is About page</h2>
            <img src="images/laptop.jpg" alt="laptop" width="400" height="400" />
        </div>
    )
}

export default About;
