import React from 'react';
import NavBar from '../pages/Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const LoginLayout = () => {
      return (
            <div className='flex flex-col min-h-screen my-container'>
                  <NavBar/>
                  <Outlet/>
                  <Footer/>
            </div>
      );
};

export default LoginLayout;