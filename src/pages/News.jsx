import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import EditorInsight from './EditorInsight';
const News = () => {
      const news = useLoaderData();
      console.log(news);
      const { image_url, title, details, category_id } = news
      return (
            <div className=' mr-8'>
                  <h1 className=' text-xl font-bold'>Dragon News</h1>
                  <div className='my-4 border shadow-md p-6 rounded-md '>
                        <img className='' src={image_url} alt="" />
                        <h1 className=' text-xl font-semibold my-6'>{title}</h1>
                        <p className=' mb-6'>{details}</p>
                        <Link className='bg-[#ea3061] text-white hover:bg-[#891a38] px-8 py-2 rounded-md flex items-center gap-4 max-w-xs ' to={`/category/${category_id}`}>
                              <FaArrowLeft /> All News in this Category
                        </Link>

                  </div>

                  <div className=' mt-8'>
                        <h1 className='text-xl font-bold my-4'>Editors Insight</h1>
                        <EditorInsight />
                  </div>
            </div>
      );
};

export default News;