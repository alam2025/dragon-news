import React from 'react';
import qzone1 from './../../../assets/qZone1.png'
import qzone2 from './../../../assets/qZone2.png'
import qzone3 from './../../../assets/qZone3.png'

const Qzone = () => {
      return (
            <div className=' p-8 bg-slate-100'>
                  <h1 className=' text-xl font-semibold' >Q-Zone</h1>
                  <div>
                        <img src={qzone1} alt="qzone1" />
                        <img src={qzone2} alt="qzone2" />
                        <img src={qzone3} alt="qzone3" />
                  </div>
            </div>
      );
};

export default Qzone;