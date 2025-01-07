import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from '../../utils/utils';
import { seller_register } from '../../store/Reducers/authReducer';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    checkbox: false,
  });

  const inputHandel = (e) => {
    const { name, value, type, checked } = e.target;
    setState({
      ...state,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(seller_register(state));
    if (!state.checkbox) {
      alert('Please agree to the privacy policy & terms.');
      return;
    }
    console.log('Form Data:', state);
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch({ type: 'auth/messageClear' }); // Dispatch action to clear messages
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: 'auth/messageClear' }); // Dispatch action to clear messages
    }
  }, [errorMessage, successMessage, dispatch, navigate]);

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md shadow-lg">
          <h2 className="text-xl mb-3 font-bold text-center">
            Welcome to Ecommerce
          </h2>
          <p className="text-sm mb-3 font-medium text-center">
            Please register your account
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={state.name}
                onChange={inputHandel}
                className="p-2 rounded-md outline-none text-black"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={state.email}
                onChange={inputHandel}
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
                placeholder="Enter your password"
                value={state.password}
                onChange={inputHandel}
                className="p-2 rounded-md outline-none text-black"
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked={state.checkbox}
                onChange={inputHandel}
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & terms
              </label>
            </div>

            {/* Submit Button */}
            <button
              disabled={loader}
              type="submit"
              className="bg-[#4c43a1] w-full p-2 rounded-md text-white font-bold hover:bg-[#5d54b8] transition duration-200"
            >
              {loader ? (
                <PropagateLoader color="white" cssOverride={overrideStyle} />
              ) : (
                'Sign up'
              )}
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account?{' '}
                <Link className="font-bold" to="/login">
                  Sign In
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

export default Register;
