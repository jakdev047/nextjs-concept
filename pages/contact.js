import React from 'react';
import Navigation from '../components/navigation';
import Head from 'next/head';

const Contact = () => {
    return (
        <div>
            <Head>
                {/* title */}
                <title>Contact</title>
            </Head>
            <Navigation />
           <h2>This is Contact page</h2> 
        </div>
    )
}

export default Contact;
