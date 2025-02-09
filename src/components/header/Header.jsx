import "./header.css";

import Navbar from "./Navbar";
import { Ripple, Input, initTWE } from "tw-elements";
import Test from "./LastHeader";

initTWE({ Ripple, Input });
const Header = () => {
  return (
    <>
      <Navbar />
      <Test />
    </>
  );
};

export default Header;
