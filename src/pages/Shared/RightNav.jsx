import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from './RightNav/Qzone';
import bg1 from './../../assets/bg1.png'

const RightNav = () => {
      return (
            <div className=''>
                  <div className=' flex flex-col gap-4 my-2'>
                        <h1 className=' text-xl font-semibold'>Login With</h1>

                        <button className='flex gap-2 btn btn-outline btn-success '><FaGoogle /> Login with Google</button>
                        <button className='flex gap-2 btn btn-outline btn-primary'><FaGithub /> Login with Github</button>

                  </div>

                  <div className=' flex flex-col gap-4 my-4'>
                        <h1 className=' text-xl font-semibold'>Find Us On</h1>
                        <div className="btn-group btn-group-vertical">
                              <button className="flex gap-2 justify-start btn btn-outline"><FaFacebook/> Facebook</button>
                              <button className="flex gap-2 justify-start btn btn-outline"><FaTwitter/> Twitter</button>
                              <button className="flex gap-2 justify-start btn btn-outline"><FaInstagram/> Instragram</button>
                        </div>
                  </div>
                  <Qzone/>

                  <div className='rightNav text-white px-8 py-12 text-center my-4' >
                        <h1 className=' text-2xl font-semibold'>Create an Amazing Newspaper</h1>
                        <p className=' my-8'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className=' btn bg-[#D72050] hover:bg-[#550a1e]'>Learn more</button>
                  </div>
            </div>
      );
};

export default RightNav;