import React from 'react';
import Header from '../pages/Shared/Header';
import NavBar from '../pages/Shared/NavBar';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav';
import Footer from '../pages/Shared/Footer';

const NewsLayout = () => {
      return (
            <div className=' flex flex-col min-h-screen my-container'>
                  <Header />
                  <NavBar />

                  <div className=' grid md:grid-cols-3 lg:grid-cols-4 gap-2'>
                        
                        <div className=' col-span-3'>
                              <Outlet />
                        </div>
                        <RightNav />
                  </div>

                  <Footer />
            </div>
      );
};

export default NewsLayout;