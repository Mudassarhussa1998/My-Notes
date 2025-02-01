import React, { useState } from "react";
import { Button, ConfigProvider, Space } from "antd";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [darkMode] = useState(false);

  const navigator = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let valid = true;

    // Validate email
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    }

    // Validate phone
    if (!phone) {
      setPhoneError("Phone is required");
      valid = false;
    } else if (isNaN(phone)) {
      setPhoneError("Phone must be a number");
      valid = false;
    } else if (phone.length <= 10 || phone.length > 11) {
      setPhoneError("Phone is not valid");
      valid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Password does not match");
      valid = false;
    }

    if (valid) {
      console.log("Email:", email, "Phone:", phone, "Password:", password, "Confirm Password:", confirmPassword);
      navigator("/home"); // Navigate after validation
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className={`relative w-full h-screen flex justify-center items-center overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Background Design */}
      <div className="absolute rotate-45 bottom-[100px] -left-[200px] bg-gradient-to-r from-cyan-500 to-blue-500 h-[500px] w-[400px] rounded-t-custom-top"></div>
      <div className="absolute rotate-45 top-[100px] -right-[200px] bg-gradient-to-r from-cyan-500 to-blue-500 h-[500px] w-[400px] rounded-b-custom-bottom"></div>

      {/* Signup Form */}
      <div
        className={`w-[500px] h-[600px] rounded-3xl flex flex-col items-center p-5 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-3xl font-bold tracking-wide flex items-center">
          Sign up
        </h1>

        {/* Email Input */}
        <div className="w-full text-start px-5 flex flex-col mt-[20px]">
          <label className="text-gray-500">Email ID</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className={`w-full h-[40px] border-2 ${
              emailError ? "border-red-500" : "border-gray-300"
            } ${darkMode ? "bg-black text-white" : "bg-white text-black"} rounded-lg mt-1 px-3`}
            placeholder="Enter your email"
          />
          {emailError && <span className="text-red-500 text-sm mt-1">{emailError}</span>}
        </div>

        {/* Phone Input */}
        <div className="w-full text-start px-5 flex flex-col mt-[20px]">
          <label className="text-gray-500">Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            className={`w-full h-[40px] border-2 ${
              phoneError ? "border-red-500" : "border-gray-300"
            } ${darkMode ? "bg-black text-white" : "bg-white text-black"} rounded-lg mt-1 px-3`}
            placeholder="Enter your phone number"
          />
          {phoneError && <span className="text-red-500 text-sm mt-1">{phoneError}</span>}
        </div>

        {/* Password Inputs */}
        <div className="w-full text-start px-5 flex flex-col mt-[20px]">
          <label className="text-gray-500">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className={`w-full h-[40px] border-2 ${
              passwordError ? "border-red-500" : "border-gray-300"
            } ${darkMode ? "bg-black text-white" : "bg-white text-black"} rounded-lg mt-1 px-3`}
            placeholder="Enter your password"
          />
          {passwordError && <span className="text-red-500 text-sm mt-1">{passwordError}</span>}
        </div>

        <div className="w-full text-start px-5 flex flex-col mt-[20px]">
          <label className="text-gray-500">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className={`w-full h-[40px] border-2 ${
              confirmPasswordError ? "border-red-500" : "border-gray-300"
            } ${darkMode ? "bg-black text-white" : "bg-white text-black"} rounded-lg mt-1 px-3`}
            placeholder="Confirm your password"
          />
          {confirmPasswordError && (
            <span className="text-red-500 text-sm mt-1">{confirmPasswordError}</span>
          )}
        </div>

        {/* Submit Button */}
        <ConfigProvider>
          <Space className="mt-5 flex justify-center w-full">
            <Button
              className="w-[200px] tracking-widest rounded bg-blue-500 hover:bg-blue-600 text-white"
              type="primary"
              size="large"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </Space>
        </ConfigProvider>
      </div>
    </form>
  );
}
