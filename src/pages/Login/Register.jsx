import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
      const {createUser}= useContext(AuthContext);

      const handleRegister= event=>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const photoUrl = form.photoUrl.value;
            const password = form.password.value;
            createUser(email, password)
            .then(result=>{
                  const user= result.user;
                  console.log(user);
            }).catch(error=>console.log(error.message))
      }
      return (
            <><div className="w-[55%] mx-auto border shadow-md mb-10 py-6 ">


                  <h1 className="text-4xl text-center my-6 font-bold">Login now!</h1>
                  <hr className='mx-6  ' />


                  <div className=" bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                              <div className="form-control ">
                                    <label className="label font-bold ">
                                          <span className="label-text text-xl">Your Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter your Name" className="bg-[#F3F3F3] border-0 input input-bordered" required />
                              </div>

                              <div className="form-control ">
                                    <label className="label font-bold ">
                                          <span className="label-text text-xl">Your PhotoUrl</span>
                                    </label>
                                    <input type="text" name='photoUrl' placeholder="Enter your PhotoUrl" className="bg-[#F3F3F3] border-0 input input-bordered" required />
                              </div>
                              <div className="form-control ">
                                    <label className="label font-bold ">
                                          <span className="label-text text-xl">Email address</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter your email" className="bg-[#F3F3F3] border-0 input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label font-bold ">
                                          <span className="label-text text-xl">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter your password" name='password' className="bg-[#F3F3F3] border-0 input input-bordered" required />
                                    <label className="label">
                                          <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                                    </label>
                              </div>
                              <div className="form-control">
                                    <label className="cursor-pointer flex justify-start gap-3 label">
                                          
                                          <input name='accept' type="checkbox"className="checkbox checkbox-accent" />
                                          <span className="label-text">Accept <Link to='/term-condition'className='font-bold hover:underline'>Term & Condition</Link></span>
                                    </label>
                              </div>
                              <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>

                              </div>
                              <p className=' text-center'>Already Have An Account? <Link className=' text-orange-500' to='/login'>Login</Link></p>

                        </form>
                  </div>

            </div>
            </>
      );
};

export default Register;