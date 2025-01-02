import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md shadow-lg">
          <h2 className="text-xl mb-3 font-bold text-center">
            Welcome to Ecommerce
          </h2>
          <p className="text-sm mb-3 font-medium text-center">
            Please Sign in to your account
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-2 rounded-md outline-none text-black"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col w-full gap-1 mb-4">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="p-2 rounded-md outline-none text-black"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#4c43a1] w-full p-2 rounded-md text-white font-bold hover:bg-[#5d54b8] transition duration-200"
            >
              Sign In
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't have an account?{' '}
                <Link className="font-bold" to="/register">
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-start">
                <span className="pb-1">or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>

            {/* Social Media Buttons */}
            <div className="flex justify-center items-center gap-3">
              <button className="bg-[#3b5998] w-8 h-8 rounded-full flex justify-center items-center text-white font-bold hover:bg-[#4a6aa5] transition duration-200">
                f
              </button>
              <button className="bg-[#1da1f2] w-8 h-8 rounded-full flex justify-center items-center text-white font-bold hover:bg-[#1a91da] transition duration-200">
                t
              </button>
              <button className="bg-[#db4437] w-8 h-8 rounded-full flex justify-center items-center text-white font-bold hover:bg-[#c33d2f] transition duration-200">
                G
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
