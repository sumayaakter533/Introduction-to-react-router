import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

const Home = () => {
    const location = useLocation();

    return (
        <div className='flex flex-col min-h-screen'>
            <Header></Header>
            {location.pathname === "/" && <Hero></Hero>}
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
