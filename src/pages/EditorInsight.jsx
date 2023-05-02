import React from 'react';
import first from './../assets/editorsInsight1.png'
import second from './../assets/editorsInsight2.png'
import third from './../assets/editorsInsight3.png'

const EditorInsight = () => {
      return (
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  <div>
                        <img src={first} alt="" />
                        <h1 className=' text-xl font-semibold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                  </div>
                  <div>
                        <img src={second} alt="" />
                        <h1 className=' text-xl font-semibold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                  </div>
                  <div>
                        <img src={third} alt="" />
                        <h1 className=' text-xl font-semibold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                  </div>
            </div>
      );
};

export default EditorInsight;