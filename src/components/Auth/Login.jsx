import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, replace, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

const Login = () => {
  const navigat = useNavigate();
  const [value, setValue] = useState({
    email: "",
    Password: "",
  });
  const handleLogin = async (userData) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        userData
      );
      toast.success("Welcome ");

      setTimeout(() => {
        navigat("/", { replace: true });
      }, 1000);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(value);
  };
  console.log(value);
  return (
    <section className="mt-10 bg-gray-900 " dir="ltr">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={handleSubmit}>
              <TEInput
                type="email"
                label="Email address"
                size="lg"
                className="mb-6"
                onChange={handleChange}
                name="email"
                required
              ></TEInput>

              <TEInput
                type="password"
                label="Password"
                className="mb-6"
                size="lg"
                onChange={handleChange}
                name="password"
                required
              ></TEInput>
              <div className="mb-2 flex items-center justify-between"></div>
              <TERipple rippleColor="light" className="w-full">
                <button
                  type="submit"
                  className="inline-block w-full mt-0 rounded bg-amber-400 cursor-pointer px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign up
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <Link
                  to="/register"
                  className="inline-block  mt-5 cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-amber-500 transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                >
                  Register
                </Link>
              </TERipple>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;

