import React from "react";

// Link
import { Link } from "react-router-dom";

// Helmet
import { Helmet } from "react-helmet";

// Logo
import Logo from "../../assets/images/Gradesbar-Logo.png";

const Login = () => {
  // Handles form submission
  const handleSubmit = () => {};

  return (
    <>
      <Helmet>
        <title>Login - Gradesbar</title>
      </Helmet>
      <div className="bg-bgColor font-sans">
        <div className="w-full min-h-screen flex justify-center items-center">
          <div className="max-w-lg w-full bg-white py-16 px-8 rounded-[10px] shadow-sm grid my-6 mx-3 sm:mx-0">
            <img
              className="justify-self-center"
              src={Logo}
              alt="Gradesbar Logo"
            />

            <form
              className="flex flex-col items-start w-full mt-10"
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

              <Link
                to="/companies"
                className="w-full text-center bg-textColor p-3 text-white rounded-[10px] uppercase font-medium"
                type="submit"
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
