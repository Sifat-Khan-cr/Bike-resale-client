import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoradNav from '../Pages/Dashboard/DashBoradNav';
import DashBorad from '../Pages/Dashboard/DashBoradNav';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <DashBoradNav></DashBoradNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;