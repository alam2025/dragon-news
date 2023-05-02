import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const NavBar = () => {
      const {user,logout}=useContext(AuthContext);
      const handleLogOut=()=>{
            logout()
            .then()
            .catch(error=>console.log(error.message))
      }
      return (
            <div className="navbar bg-base-100">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex flex-col gap-4 px-3">
                                    <Link to='/'>Home</Link>
                                    <Link to='/about'>About</Link>
                                    <Link to='/career'>Career</Link>
                              </ul>
                        </div>

                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-6">
                              <Link to='/'>Home</Link>
                              <Link to='/about'>About</Link>
                              <Link to='/career'>Career</Link>
                        </ul>
                  </div>
                  <div className="navbar-end flex gap-6">
                        <img src="" alt="Profile" className=' py-10 px-6 rounded-[50%] bg-gray-100' />
                        {
                              user ? <button onClick={handleLogOut}>Logout</button> :<Link to='/login'> Login</Link>
                        }
                        {/* <Link to='/login'> Login</Link> */}
                        {
                              user?'':<Link to='/register'> Register</Link>
                        }
                        
                  </div>
            </div>
      );
};

export default NavBar;