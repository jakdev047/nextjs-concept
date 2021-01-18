import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/login">Login</Link></li>
            </ul>
        </div>
    )
}

export default Navigation;