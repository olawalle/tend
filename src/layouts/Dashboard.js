import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import account from "../assets/icons/account.svg";
import message from "../assets/icons/message.svg";
import info from "../assets/icons/info.svg";
import billing from "../assets/icons/billing.svg";
import fire from "../assets/icons/fire.svg";
import book from "../assets/icons/book.svg";
import community from "../assets/icons/community.svg";
import logout from "../assets/icons/logout.svg";
import Button from "../components/Button";

function Dashboard({ children }) {
  const [sideOpen, setSideOpen] = useState(false);
  const topLinks = [
    { text: "Account", icon: account },
    { text: "Billing", icon: billing },
    { text: "Info", icon: info },
  ];
  const bottomLinks = [
    { text: "Message support", icon: message },
    { text: "Help centre", icon: book },
    { text: "Join community", icon: community },
    { text: "Log out", icon: logout },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          sideOpen ? "" : "hidden"
        } md:block w-[90%] md:w-[300px] py-[30px] px-[20px] h-[100vh] side-bar overflow-hidden relative`}
      >
        <img src={logo} className="h-[34px]" alt="" />

        <div className="w-full mt-[40px]">
          {topLinks.map((item, i) => (
            <div
              key={i}
              className="flex items-center p-2 mb-2 hover:bg-[#ffffff12] rounded-[8px] cursor-pointer"
            >
              <img src={item.icon} className="w-[24px]" alt="" />
              <p className="ml-2 text-white text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-green-gradient w-full p-[12px] rounded-[12px]">
          <div className="w-full flex pb-[12px] border-[#F8FAF50D] border-b-[1px] mb-[12px]">
            <img src={fire} alt="" />
            <p className="ml-2 text-[14px] text-[#F8FAF5]">Stay efficient</p>
          </div>

          <div>
            <p className="text-[14px] text-[#F8FAF5] font-light mb-[20px]">
              Your first week is free. Upgrade to keep enjoying swift bookmark
              search.
            </p>

            <Button variant={"primary"} title={"Learn more"} />
          </div>
        </div>

        <div className="absolute bottom-0 w-[90%]">
          <div className="w-full mt-[40px]">
            {bottomLinks.map((item, i) => (
              <div
                key={i}
                className="flex items-center p-2 mb-2 hover:bg-[#ffffff12] rounded-[8px] cursor-pointer"
              >
                <img src={item.icon} className="w-[24px]" alt="" />
                <p className="ml-2 text-white text-[14px] text-[#FFFFFFB2]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${
          sideOpen ? "w-[20%]" : "w-full"
        } px-[20px] pt-[30px] overflow-hidden`}
      >
        <div className="md:hidden flex justify-end">
          <button onClick={() => setSideOpen(!sideOpen)} className="text-white">
            <div id="nav-icon1" className={sideOpen ? "open" : ""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div className={`${!sideOpen ? "" : "hidden"}`}>{children}</div>
      </div>
    </div>
  );
}

export default Dashboard;
