import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBorad from '../Pages/Dashboard/DashBorad';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;