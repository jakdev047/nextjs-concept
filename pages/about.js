import React from 'react';
import Navigation from '../components/navigation';
// import Image from 'next/image'

const About = () => {
    return (
        <div>
            <Navigation />
           <h2>This is About page</h2> 
           <img src="images/laptop.jpg" alt="laptop" width="400" height="400" />
        </div>
    )
}

export default About;
