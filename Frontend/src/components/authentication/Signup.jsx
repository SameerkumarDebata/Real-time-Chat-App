import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import {Link} from "react-router-dom";
const Signup = () => {
  

  return (
        <div className="flex justify-center items-center p-6 min-h-screen" >
            
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Please Signup..!!</h2>

        <label className="input input-bordered flex items-center gap-2">
          <FaUser />
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Full name"
         
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <FaUser />
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Username"
         
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <FaKey />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="grow"
       
          />
        </label>
          
          <label className="input input-bordered flex items-center gap-2">
          <FaKey />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            className="grow"
       
          />
        </label>

        <button  className="btn btn-primary">
          Signup
        </button>

        <p>
          Already have an account? &nbsp;
          <Link to='/Login' className="text-blue-400 underline">Login</Link>
         

        
        </p>
      </div>
      </div>
    
  );
};

export default Signup;
