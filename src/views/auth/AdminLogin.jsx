import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

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
    dispatch(admin_login(formData)); // Pass formData to the thunk
  };

  const overrideStyle = {
    display: 'flex',
    margin: '0 auto',
    height: '24px',
    justifyContent: 'center',
    alignItems: 'center', // Fixed typo from 'alignItem'
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch({ type: 'auth/messageClear' }); // Dispatch action to clear messages
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: 'auth/messageClear' }); // Dispatch action to clear messages
      navigate('/');
    }
  }, [errorMessage, successMessage, dispatch, navigate]);

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md shadow-lg">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img
                className="w-full h-full"
                src="http://localhost:3000/images/logo.png"
                alt="logo"
              />
            </div>
          </div>
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
              disabled={loader}
              type="submit"
              className="bg-[#4c43a1] w-full p-2 rounded-md text-white font-bold hover:bg-[#5d54b8] transition duration-200"
            >
              {loader ? (
                <PropagateLoader color="white" cssOverride={overrideStyle} />
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
