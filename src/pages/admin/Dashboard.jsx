import React, { useState } from "react";
import DashContent from "../../components/admin/maindash/DashContent";
import PaidQuestions from "../../components/admin/maindash/PaidQuestions";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Customers from "../../components/admin/customers/Customers";
import RawCustomer from "../../components/admin/rawcostumer/RawCustomer";
import HelpCenter from "../../components/admin/helpcenter/HelpCenter";
import Settings from "../../components/admin/settings/Settings";
import CreditPlans from "../../components/admin/creditplans/CreditPlans";
import Moderator from "../../components/admin/staff/Moderator";
import Astrologer from "../../components/admin/staff/Astrologer";
import Analyst from "../../components/admin/staff/Analyst";
import SystemMessageType from "../../components/admin/systemmessage/SystemMessageType";
import Questions from "../../components/admin/questions/Questions";

import { FiMenu } from "react-icons/fi";
import { FaSearch, FaUserCog } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";
import SystemMessage from "../../components/admin/systemmessage/SystemMessage";
import AstrologerHelperType from "../../components/admin/AstrologerHelper/AstrologerHelperType";
import AstrologerHelper from "../../components/admin/AstrologerHelper/AstrologerHelper";
import ModeratorHelper from "../../components/admin/moderatorHelper/ModeratorHelper";
import ModeratorHelperType from "../../components/admin/moderatorHelper/ModeratorHelperType";
import CTemplateType from "../../components/admin/clarificationTemp/CTemplateType";
import CTemplate from "../../components/admin/clarificationTemp/CTemplate";
import QTemplate from "../../components/admin/questionTemp/QTemplate";
import QTemplateType from "../../components/admin/questionTemp/QTemplateType";

export default function Dashboard() {
  const { pathname } = useLocation();
  const [openSearch, setOpenSearch] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  console.log(openSidebar);
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      enterFullScreen();
    } else {
      exitFullScreen();
    }
  };

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const setSidebarOpen = (isOpen) => {
    setOpenSidebar(isOpen);
  };

  return (
    <>
      <div className="bg-slate-100 ">
        <div className="absolute sm:hidden p-2">
          <div
            onClick={() => setOpenSidebar(!openSidebar)}
            className="p-2 bg-slate-100 rounded-full shadow-md"
          >
            <FiMenu size={20} />
          </div>
        </div>
        {openSidebar && (
          <div className="fixed top-14 z-50 w-[60%] rounded-r-md mb-10 sm:hidden h-full flex-col overflow-auto bg-gray-800">
            <Sidebar setSidebarOpen={setSidebarOpen} />
          </div>
        )}
        <div className="w-[15.5rem] mb-10 hidden sm:flex fixed h-full flex-col overflow-auto bg-gray-800">
          <Sidebar />
        </div>
        <div className="w-[full] overflow-x-auto sm:ml-[16rem]">
          <div className="flex w-full px-5 py-2 border-b h-14 justify-between items-center gap-2 text-gray-500 bg-white">
            <div className="flex gap-5 items-center">
              <Link to="/admin/help-center" className="flex gap-5">
                <div className="hidden sm:inline-block">
                  <FiMenu size={20} />
                </div>
                <div className="ml-10 sm:ml-auto">
                  <p>Help Center</p>
                </div>
              </Link>
            </div>
            <div className="flex gap-7 items-center">
              {openSearch ? (
                <form className="flex items-center gap-3 transition-all duration-300">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="py-1 rounded-md border focus:outline-none"
                  />
                  <div
                    onClick={() => setOpenSearch(!openSearch)}
                    className="cursor-pointer"
                  >
                    <FaSearch size={20} />
                  </div>
                </form>
              ) : (
                <div
                  onClick={() => setOpenSearch(!openSearch)}
                  className="cursor-pointer"
                >
                  <FaSearch size={20} />
                </div>
              )}
              <button onClick={toggleFullScreen}>
                <div>
                  <MdZoomOutMap size={20} />
                </div>
              </button>
              <div>
                <AiFillAppstore size={20} />
              </div>{" "}
              <div
                onClick={() => setOpenLogout(!openLogout)}
                className="cursor-pointer"
              >
                <FaUserCog size={20} />
              </div>
              {openLogout && (
                <div className="bg-white absolute mt-[11rem] ml-[-3rem] border p-3">
                  <div className="my-2 cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                    <p>Log out from this device</p>
                  </div>
                  <div className="my-2 cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                    <p>Log out from All device</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="">
            {pathname === "/admin/dashboard" && (
              <>
                <DashContent />
                <PaidQuestions />
              </>
            )}
            {pathname === "/admin/staff-management/moderator" && <Moderator />}
            {pathname === "/admin/staff-management/astrologer" && (
              <Astrologer />
            )}
            {pathname === "/admin/staff-management/analyst" && <Analyst />}
            {pathname === "/admin/customers" && <Customers />}
            {pathname === "/admin/raw-customers" && <RawCustomer />}
            {pathname === "/admin/help-center" && <HelpCenter />}
            {pathname === "/admin/questions" && <Questions />}
            {pathname === "/admin/settings" && <Settings />}
            {pathname === "/admin/credit-plans" && <CreditPlans />}
            {pathname === "/admin/system-message/message-type" && (
              <SystemMessageType />
            )}
            {pathname === "/admin/system-message/message" && <SystemMessage />}
            {pathname === "/admin/astrologer-helper/type" && (
              <AstrologerHelperType />
            )}
            {pathname === "/admin/astrologer-helper/template" && (
              <AstrologerHelper />
            )}
            {pathname === "/admin/moderator-helper/type" && (
              <ModeratorHelperType />
            )}
            {pathname === "/admin/moderator-helper/template" && (
              <ModeratorHelper />
            )}
            {pathname === "/admin/clarification-template/type" && (
              <CTemplateType />
            )}
            {pathname === "/admin/clarification-template/template" && (
              <CTemplate />
            )}
            {pathname === "/admin/questions-template/type" && <QTemplateType />}
            {pathname === "/admin/questions-template/template" && <QTemplate />}
          </div>
        </div>
      </div>
    </>
  );
}
