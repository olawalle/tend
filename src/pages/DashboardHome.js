import React from "react";
import Dashboard from "../layouts/Dashboard";
import Input from "../components/Input";
import Button from "../components/Button";

function DashboardHome(props) {
  return (
    <Dashboard>
      <div className="w-full md:w-[500px] mx-auto">
        <div className="border-[#FFFFFF08] border-b-[1px]">
          <p className="text-white mb-[0px] text-[30px] font-semibold">
            Account
          </p>
          <p className="text-[#ffffffb5] text-[14px] mb-6 font-light">
            Update your personal details
          </p>
        </div>

        <div className="w-full pt-[50px]">
          <p className="text-white text-[18px] font-semibold mb-[20px]">
            Profile details
          </p>

          <div className="w-full md:w-[400px]">
            <Input label="Name" placeholder={"Enter your name..."} />
            <Input label="Email address" placeholder={"User@email.com"} />
          </div>

          <p className="text-[14px] text-[#FFFFFFB2]">
            You will be able to change your email address soon. If you need to
            change it now, please contact us via support@tend.so
          </p>
          <Button title="Update" className="!w-[100px] mt-4" />

          <div className="border-[#FFFFFF08] border-t-[1px] pt-[40px] mt-[40px]">
            <p className="text-white text-[18px] font-semibold mb-[20px]">
              Delete account
            </p>
            <p className="text-[14px] text-[#FFFFFFB2]">
              If you want to permanently delete your Tend account, you can do so
              below. Your existing Chrome bookmarks won’t be affected.
            </p>
            <Button
              title="Delete account"
              variant="danger"
              className="!w-[140px] mt-4"
            />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default DashboardHome;
