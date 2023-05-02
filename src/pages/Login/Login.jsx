import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
      const {loginUser}= useContext(AuthContext);
      const navigate= useNavigate()
      const location = useLocation();

      console.log(location);
      const from = location.state?.from?.pathname;

      const handleLogin=(event)=>{
            event.preventDefault();

            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            
            loginUser(email, password)
            .then(result=>{
                  const user=result.user;
                  console.log(user);
                  navigate(from, {replace:true})
            }).catch(error=>console.log(error.message))

            
      }

      return (
            <><div className="w-[55%] mx-auto border shadow-md mb-10 py-6 ">
               

                        <h1 className="text-4xl text-center my-6 font-bold">Login now!</h1>
                       <hr className='mx-6  ' />
                       

                        <div className=" bg-base-100">
                              <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control ">
                                          <label className="label font-bold ">
                                                <span className="label-text text-xl">Email address</span>
                                          </label>
                                          <input name='email' type="emailt" placeholder="Enter your email" className="bg-[#F3F3F3] border-0 input input-bordered"  required/>
                                    </div>
                                    <div className="form-control">
                                          <label className="label font-bold ">
                                                <span className="label-text text-xl">Password</span>
                                          </label>
                                          <input name='password' type="password" placeholder="Enter your password" className="bg-[#F3F3F3] border-0 input input-bordered" required />
                                          <label className="label">
                                                <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                                          </label>
                                    </div>
                                    <div className="form-control mt-6">
                                          <button className="btn btn-primary">Login</button>
                                          
                                    </div>
                                    <p className=' text-center'>Don't Have An Account? <Link className=' text-orange-500' to='/register'>Register</Link></p>
                                    
                              </form>
                        </div>
                 
            </div>
            </>
      );
};

export default Login;