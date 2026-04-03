import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Home/Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex gap-20'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;