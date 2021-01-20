import React from 'react';
import Navigation from '../components/navigation';
import Head from 'next/head';

const Login = () => {
    return (
        <div>
            <Head>
                {/* title */}
                <title>Login</title>
            </Head>
            <Navigation />
           <h2>This is Login page</h2> 
        </div>
    )
}

export default Login;
