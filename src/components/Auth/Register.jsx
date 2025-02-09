import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

const Register = () => {
  const navigat = useNavigate();
  const [value, setValue] = useState({
    Username: "",
    email: "",
    Password: "",
  });
  const handleRegister = async (userData) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/register",
        userData
      );
      localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
      toast.success("Successfully toasted!");
      setTimeout(() => {
        navigat("/login",{replace:true});
      }, 1000);
    } catch (error) {
      toast.error(error.response.data); 
      toast.success('Successfully registered')
      
    }
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(value);
  };
  console.log(value);

  return (
    <section
      dir="ltr"
      className="h-full m-auto bg-neutral-200 dark:bg-neutral-700"
    >
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Hala Team
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please register an account</p>
                      <TEInput
                                    type="userName"
                                    label="userName"
                                    className="mb-6"
                                    size="lg"
                                    onChange={handleChange}
                                    name="userName"
                                    required
                                  ></TEInput>
                     <TEInput
                                    type="email"
                                    label="Email address"
                                    size="lg"
                                    className="mb-6"
                                    onChange={handleChange}
                                    name="email"
                                    required
                                  ></TEInput>
                    
                                  {/* <!--Password input--> */}
                                  <TEInput
                                    type="password"
                                    label="Password"
                                    className="mb-6"
                                    size="lg"
                                    onChange={handleChange}
                                    name="password"
                                    required
                                  ></TEInput>
                             

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 cursor-pointer inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Sign up
                          </button>
                        </TERipple>
                      </div>

                    </form>
                      <div className="flex items-center justify-between pb-2">
                        <TERipple rippleColor="light">
                          <Link
                            to="/login"
                            className="inline-block cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Login
                          </Link>
                        </TERipple>
                      </div>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      At Hala, we make shopping a unique experience that
                      combines quality and exclusive offers. Discover the latest
                      products and special deals designed to meet your needs and
                      fulfill your ambitions. Join us today and enjoy an easy,
                      safe and fun shopping journey that makes a difference to
                      your lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;

// useEffect(() => {}, []);
//   return (
//     <div>
//       <Toaster
//   position="top-center"
//   reverseOrder={false}
// />
//       <form className="bg-amber-300" onSubmit={handleSubmit}>
//         <input onChange={handleChange} type="email" name="email" id="" />
//         <input onChange={handleChange} type="password" name="password" id="" />
//         <input onChange={handleChange} type="Username" name="Username" id="" />

//         <button className="bg-blue-500" type="submit" value="Register">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;
