import React from 'react';
import Header, { LogoLink, NavLinks, NavLink } from '../component/headers/light';
import '../assets/styles/Home.css'
import '../assets/styles/GlobalStyles.js'

const Home = () => {
    const links = (
        <NavLinks>
            <NavLink href="/#">Home</NavLink>
            <NavLink href="/#">About</NavLink>
            <NavLink href="/#">Services</NavLink>
            <NavLink href="/#">Contact</NavLink>
        </NavLinks>
    );
    return (
        <>
            <Header links={links} />
        </>
    );
};

export default Home;
