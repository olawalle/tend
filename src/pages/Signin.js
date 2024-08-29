import React from "react";
import MailIcon from "../assets/icons/mail.icon.svg";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router";

function Signin(props) {
  const navigate = useNavigate();

  const handleSignin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-full bg-gradient px-[40px]">
      <div className="w-full md:w-[320px] items-center justify-center flex flex-col">
        <img src={MailIcon} alt="" />
        <p className="text-white my-[30px] text-[30px] font-semibold">
          Sign in
        </p>
        <p className="text-[#ffffffb5] text-[14px] text-center mb-6 font-light">
          Welcome, please enter your email address below to receive a sign-in
          code.
        </p>

        <Input label={"Email address"} placeholder={"Enter email address..."} />
        <Button onClick={handleSignin} variant={"primary"} title={"Sign in"} />
      </div>
    </div>
  );
}

export default Signin;
