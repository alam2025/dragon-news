import React from 'react';
import Header from '../pages/Shared/Header';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/Shared/LeftNav';
import RightNav from '../pages/Shared/RightNav';

const Main = () => {
      return (
            <div className=' flex flex-col min-h-screen my-container'>
                  <Header/>
                  <NavBar/>

                  <div className=' grid md:grid-cols-3 lg:grid-cols-4 gap-2'>
                        <LeftNav/>
                        <div className=' col-span-2'>
                              <Outlet/>
                        </div>
                        <RightNav />
                  </div>

                  <Footer/>
            </div>
      );
};

export default Main;