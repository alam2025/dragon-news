// import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';
// import { AuthContext } from '../Providers/AuthProvider';

const Category = () => {
      const {id}= useParams()
      console.log(id);
      const category= useLoaderData();
      // const {user}= useContext(AuthContext)
      // console.log(user);
      
      return (
            <div>
                  <h1 className=' text-xl font-semibold'>Dragon News Home</h1>
                  {
                        category.map(ct=><NewsCard
                        key={ct._id}
                        category={ct}
                        
                        />)
                  }

            </div>
      );
};

export default Category;