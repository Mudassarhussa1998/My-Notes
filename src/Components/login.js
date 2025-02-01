import React, { useState } from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';
import { useNavigate } from 'react-router-dom';

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        z-index: -1;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

export default function Login() {
  const { styles } = useStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [darkMode] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError('');
    setPasswordError('');

    let valid = true;

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      valid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    }

    if (valid) {
      console.log('Email:', email, 'Password:', password);
      navigate('/home'); // Navigate after validation
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative w-full h-screen flex justify-center items-center overflow-hidden ${darkMode ? 'bg-black text-white' : 'bg-white text-black'
        }`}
    >

      {/* Rotated Background Boxes */}
      <div className="absolute rotate-45 bottom-[100px] -left-[200px] bg-gradient-to-r from-cyan-500 to-blue-500 sm:h-[100px] sm:w-[100px] md:h-[500px] md:w-[400px] border-transparent rounded-t-custom-top"></div>
      <div className="absolute rotate-45 top-[100px] -right-[200px] bg-gradient-to-r from-cyan-500 to-blue-500 md:h-[500px] md:w-[400px] border-transparent rounded-b-custom-bottom"></div>

      {/* Login Form Container */}
      <div
        className={`bg-black w-[500px] h-[550px] rounded-3xl flex flex-col items-center p-5  text-white ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} `}

      >
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Login</h1>

        {/* Email Input */}
        <div className="w-full text-start px-5 flex flex-col mt-[30px]">
          <label className="text-gray-500">Email ID</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className={`w-full h-[40px] border-2 ${emailError ? 'border-red-500' : 'border-gray-300'
              } ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} rounded-lg mt-1 px-3`}
            placeholder="Enter your email"
          />
          {emailError && <span className="text-red-500 text-sm mt-1">{emailError}</span>}
        </div>

        {/* Password Input */}
        <div className="w-full text-start px-5 flex flex-col mt-[20px]">
          <label className="text-gray-500">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className={`w-full h-[40px] border-2 ${passwordError ? 'border-red-500' : 'border-gray-300'
              } ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} rounded-lg mt-1 px-3`}
            placeholder="Enter your password"
          />
          {passwordError && <span className="text-red-500 text-sm mt-1">{passwordError}</span>}
        </div>

        {/* Gradient Button */}
        <ConfigProvider
          theme={{
            components: {
              Button: {
                className: styles.linearGradientButton,
              },
            },
          }}
        >
          <Space className="mt-5 flex justify-start w-full ml-[40px]">
            {/* Login Button */}
            <Button
              className="w-[120px] rounded-full bg-blue-500 hover:bg-blue-600 text-white"
              type="primary"
              size="large"
              icon={<AntDesignOutlined />}
              htmlType="submit"
            >
              Login
            </Button>

            {/* Forgot Password Button */}
            <Button
              className="ml-[150px] border-transparent text-gray-500"
              size="large"
              type="text"
            >
              Forgot Password?
            </Button>
          </Space>
        </ConfigProvider>

        <div className="w-full flex justify-start align ml-[40px]" onClick={() => navigate('/signup')}>
          <h1 className={`text-start tracking-wider flex mt-5 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} `}>
            Don't have an account?{' '}
            <span className="text-blue-500">Create one</span>
          </h1>
        </div>

        <div className="w-full flex justify-start align ml-[40px]">
          <h1 className={`text-start tracking-wider flex justify-center items-center  mt-5 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} `} >
            <span className={`border border-black  h-0 w-[150px] mr-1 ${darkMode ? 'border border-white' : 'bg-white text-black'} `}></span> Or
            Login with
            <span className={` ml-1 border border-black  h-0 w-[150px] ${darkMode ? 'border border-white' : 'bg-white text-black'} `}></span>
          </h1>
        </div>
        <div className="w-full flex justify-center item-center">
          <Space className="mt-5 flex justify-center w-full ">
            <Button
              className={`rounded-full p-2 border-blue-500 text-blue-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} `}
              size="large"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </span>
              Sign in with Google
            </Button>
          </Space>
        </div>
      </div>
    </form>
  );
}