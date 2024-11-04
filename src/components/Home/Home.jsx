import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

const Home = () => {
    const location = useLocation();
    const navigation = useNavigation();

    return (
        <div className='flex flex-col min-h-screen'>
            <Header></Header>
            {location.pathname === "/" && <Hero></Hero>}
            {navigation.state === "loading" ? (
                <p className='text-center text-4xl py-10'>Loading...</p>
            ) : (
                <div className='flex-grow'>
                    <Outlet></Outlet>
                </div>
            )}

            <Footer></Footer>
        </div>
    );
};

export default Home;
