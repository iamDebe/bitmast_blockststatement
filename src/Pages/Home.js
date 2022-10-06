import React from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {Link} from "react-router-dom"
import Search from '../Components/Search';
import RecentTrades from '../Components/RecentTrades';
import DisplayCard from '../Components/DisplayCard';

const Home = () => {

    return (  
        <>
           <Header />
           <Search/>
           <RecentTrades />
           <DisplayCard />
           <Footer />
        </>
    );
}
 
export default Home;