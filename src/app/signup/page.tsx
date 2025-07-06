import React from "react";
import SignupSec from "./components/SignupSec";
import Testimonials from "@/components/Testimonials";

const SignUp = () => {
  return (
    <>
      <SignupSec />
      <div className="mb-24">
        <Testimonials />
      </div>
    </>
  );
};

export default SignUp;
