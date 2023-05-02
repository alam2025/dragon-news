import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
      const [categories, setCategory]= useState([]);

      useEffect(()=>{
            fetch('http://localhost:3000/categories')
            .then(res=>res.json())
            .then(data=>setCategory(data))
      },[])
      
      return (
            <div  className=''>
                <h1 className=' text-xl font-semibold'>Category</h1>
                <div className=' flex flex-col '>
                  {
                        categories.map(category=><p className=' px-10 py-2 hover:bg-slate-200 rounded-md' key= {category.id}>
                              <Link className='text-lg ' to={`/category/${category.id}`}>{category.name}</Link>
                        </p>)
                  }
                </div>

            </div>
      );
};

export default LeftNav;