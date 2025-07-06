import React from "react";
import LoginForm from "./components/LoginForm";
import Testimonials from "@/components/Testimonials";

const Login = () => {
  return (
    <>
      <LoginForm />
      <div className="mb-24">
        <Testimonials />
      </div>
    </>
  );
};

export default Login;
