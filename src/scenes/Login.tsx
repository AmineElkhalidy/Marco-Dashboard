import React from "react";

// Logo
import Logo from "../assets/images/logo.svg";

const Login = () => {
  // Handles form submission
  const handleSubmit = () => {};

  return (
    <div className="w-full min-h-screen bg-bgColor relative">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="max-w-md w-full bg-white py-16 px-8 rounded-[10px] shadow-sm grid my-4">
          <img
            className="justify-self-center"
            src={Logo}
            alt="Gradesbar Logo"
          />

          <form
            className="flex flex-col items-start w-full mt-6"
            action="#"
            onSubmit={handleSubmit}
          >
            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="text-textColor font-medium block mb-2"
              >
                Email
              </label>
              <input
                className="w-full bg-inputBgColor p-3 rounded-[10px] placeholder:text-placeholderColor"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>

            <div className="w-full mb-8">
              <label
                htmlFor="password"
                className="text-textColor font-medium block mb-2"
              >
                Password
              </label>
              <input
                className="w-full bg-inputBgColor p-3 rounded-[10px] placeholder:text-placeholderColor"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <button
              className="w-full bg-textColor p-3 text-white rounded-[10px] uppercase font-medium"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
