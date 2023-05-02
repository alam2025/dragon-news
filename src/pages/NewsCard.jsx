import moment from 'moment/moment';
import React from 'react';
import { FaEye, FaRegBookmark, FaRegShareSquare, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ category }) => {
      const { author, image_url, title, details, rating, total_view,_id } = category;
      
      return (
            <div className=' my-4 border shadow-sm rounded-sm'>
                  {/* card header  */}
                  <div className='  flex justify-between items-center bg-slate-100 p-4 '>
                        <div className=' flex gap-4 justify-center items-center'>
                              <img className=' w-[40px] rounded-[50%]' src={author.img} alt="" />
                              <div>
                                    <h1>{author.name}</h1>
                                    <p>{moment(author?.published_date).format('yyy-MM-D')} </p>
                              </div>
                        </div>
                        <div className=' flex gap-4'>
                              <FaRegBookmark />
                              <FaRegShareSquare />
                        </div>
                  </div>
                  {/* card body  */}
                  <div className=' p-4'>
                        <h1 className=' text-xl font-bold my-5 '>{title}</h1>
                        <img src={image_url} alt="News Thumnnail" className=' mb-8' />
                        <p>{details?.slice(0, 400)}....</p>
                        <p><Link to={`/news/${_id}`} className=' text-lg font-semibold text-orange-500'>Read More</Link></p>

                  </div>
                  {/* card footer  */}
                  <hr />
                  <div className='p-4 flex justify-between'>
                        <div className=' flex items-center gap-2'>
                              <Rating
                                    placeholderRating={rating?.number}
                                    readonly
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className=' text-orange-400'></FaStar>}
                                    fullSymbol={<FaStar />}
                              />
                              <span>{rating?.number}</span>
                        </div>
                        <div className=' flex items-center gap-2'>
                              <FaEye></FaEye>{total_view}
                        </div>
                  </div>
            </div>
      );
};

export default NewsCard;