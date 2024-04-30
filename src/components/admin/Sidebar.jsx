import React, { useState } from "react";
import logo from "../../assets/longlogo.png";
import { Link, useLocation } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaCreditCard,
  FaHireAHelper,
  FaLink,
  FaQuestion,
  FaSearch,
  FaTools,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { AiFillDashboard, AiOutlineBars } from "react-icons/ai";
import { IoHelpCircle } from "react-icons/io5";

export default function Sidebar({ setSidebarOpen }) {
  const [openStaff, setOpenStaff] = useState(false);
  const [openSysMsg, setOpenSysMsg] = useState(false);
  const [openAstroHelp, setOpenAstroHelp] = useState(false);
  const [openModHelp, setOpenModHelp] = useState(false);
  const [openClariTemp, setOpenClariTemp] = useState(false);
  const [openQuesTemp, setOpenQuesTemp] = useState(false);

  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? "bg-blue-600" : "";
  };

  const isActivelight = (pathname) => {
    return location.pathname === pathname
      ? "bg-slate-200 rounded-md text-gray-700"
      : "";
  };

  const handleTitleClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="w-[14rem] sm:inline-block p-1 text-gray-100 min-h-screen">
        <Link to="/admin/dashboard">
          <div className="mb-3 h-14 border-b border-gray-600">
            <img src={logo} alt="" className="h-full" />
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          <div>
            <form className="flex justify-between">
              <input
                type="text"
                name=""
                id=""
                className="w-48 p-2 focus:outline-none border border-gray-500 bg-transparent text-gray-200 rounded-md"
                placeholder="Search"
              />
              <button className="border border-gray-500 p-2 rounded-md text-gray-200">
                <FaSearch />
              </button>
            </form>
          </div>
          <Link
            to="/admin/dashboard"
            onClick={handleTitleClick}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${isActive(
              "/admin/dashboard"
            )} `}
          >
            <AiFillDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <div
            onClick={() => setOpenStaff(!openStaff)}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${
              isActive("/admin/staff-management/moderator") ||
              isActive("/admin/staff-management/astrologer") ||
              isActive("/admin/staff-management/analyst")
            }`}
          >
            <AiOutlineBars size={18} />
            <span>Staff Management</span>
            {openStaff ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openStaff && (
            <div className="ml-3">
              <Link
                to="/admin/staff-management/moderator"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/staff-management/moderator"
                )}`}
              >
                <FaUsers size={18} />
                <span>Moderator</span>
              </Link>
              <Link
                to="/admin/staff-management/astrologer"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/staff-management/astrologer"
                )}`}
              >
                <p className="font-bold">ॐ</p>
                <span>Astrologer</span>
              </Link>
              <Link
                to="/admin/staff-management/analyst"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/staff-management/analyst"
                )}`}
              >
                <FaQuestion size={18} />
                <span>Analyst</span>
              </Link>
            </div>
          )}
          <Link
            to="/admin/customers"
            onClick={handleTitleClick}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${isActive(
              "/admin/customers"
            )}`}
          >
            <FaUser size={18} />
            <span>Customers</span>
          </Link>
          <Link
            to="/admin/raw-customers"
            onClick={handleTitleClick}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${isActive(
              "/admin/raw-customers"
            )}`}
          >
            <FaUser size={18} />
            <span>Raw Customers</span>
          </Link>
          <Link
            to="/admin/questions"
            onClick={handleTitleClick}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${isActive(
              "/admin/questions"
            )}`}
          >
            <FaQuestion size={18} />
            <span>Questions</span>
          </Link>
          <Link
            to="/admin/help-center"
            onClick={handleTitleClick}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${isActive(
              "/admin/help-center"
            )}`}
          >
            <IoHelpCircle size={18} />
            <span>Help Center</span>
          </Link>
          <Link
            to="/admin/settings"
            onClick={handleTitleClick}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${isActive(
              "/admin/settings"
            )}`}
          >
            <AiFillDashboard size={18} />
            <span>Settings</span>
          </Link>
          <Link
            to="/admin/credit-plans"
            onClick={handleTitleClick}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${isActive(
              "/admin/credit-plans"
            )}`}
          >
            <FaCreditCard size={18} />
            <span>Credit Plans</span>
          </Link>

          <div
            onClick={() => setOpenSysMsg(!openSysMsg)}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${
              isActive("/admin/system-message/message-type") ||
              isActive("/admin/system-message/message")
            }`}
          >
            <FaTools size={18} />
            <span>System Message</span>
            {openSysMsg ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSysMsg && (
            <div className="ml-3">
              <Link
                to="/admin/system-message/message-type"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/system-message/message-type"
                )}`}
              >
                <FaTools size={18} />
                <span>Message Type</span>
              </Link>

              <Link
                to="/admin/system-message/message"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/system-message/message"
                )}`}
              >
                <FaTools size={18} />
                <span>Message</span>
              </Link>
            </div>
          )}

          <div
            onClick={() => setOpenAstroHelp(!openAstroHelp)}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${
              isActive("/admin/astrologer-helper/type") ||
              isActive("/admin/astrologer-helper/template")
            }`}
          >
            <FaHireAHelper size={18} />
            <span>Astrologer Helper</span>
            {openAstroHelp ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openAstroHelp && (
            <div className="ml-3">
              <Link
                to="/admin/astrologer-helper/type"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/astrologer-helper/type"
                )}`}
              >
                <FaHireAHelper size={18} />
                <span>Template Type</span>
              </Link>

              <Link
                to="/admin/astrologer-helper/template"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/astrologer-helper/template"
                )}`}
              >
                <FaHireAHelper size={18} />
                <span>Template</span>
              </Link>
            </div>
          )}
          <div
            onClick={() => setOpenModHelp(!openModHelp)}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${
              isActive("/admin/moderator-helper/type") ||
              isActive("/admin/moderator-helper/template")
            }`}
          >
            <FaHireAHelper size={18} />
            <span>Moderator Helper</span>
            {openModHelp ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openModHelp && (
            <div className="ml-3">
              <Link
                to="/admin/moderator-helper/type"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/moderator-helper/type"
                )}`}
              >
                <FaHireAHelper size={18} />
                <span>Template Type</span>
              </Link>

              <Link
                to="/admin/moderator-helper/template"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/moderator-helper/template"
                )}`}
              >
                <FaHireAHelper size={18} />
                <span>Template</span>
              </Link>
            </div>
          )}
          <div
            onClick={() => setOpenClariTemp(!openClariTemp)}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${
              isActive("/admin/clarification-template/type") ||
              isActive("/admin/clarification-template/template")
            }`}
          >
            <FaLink size={18} />
            <span className="">Clarification</span>
            {openClariTemp ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openClariTemp && (
            <div className="ml-3">
              <Link
                to="/admin/clarification-template/type"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/clarification-template/type"
                )}`}
              >
                <FaLink size={18} />
                <span>Template Type</span>
              </Link>

              <Link
                to="/admin/clarification-template/template"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/clarification-template/template"
                )}`}
              >
                <FaLink size={18} />
                <span>Template</span>
              </Link>
            </div>
          )}

          <div
            onClick={() => setOpenQuesTemp(!openQuesTemp)}
            className={`flex items-center gap-2 p-1 rounded-md px-4 cursor-pointer ${
              isActive("/admin/questions-template/type") ||
              isActive("/admin/questions-template/template")
            }`}
          >
            <FaLink size={18} />
            <span className="">Questions</span>
            {openQuesTemp ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openQuesTemp && (
            <div className="ml-3">
              <Link
                to="/admin/questions-template/type"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/questions-template/type"
                )}`}
              >
                <FaLink size={18} />
                <span>Template Type</span>
              </Link>

              <Link
                to="/admin/questions-template/template"
                onClick={handleTitleClick}
                className={`flex items-center gap-2 p-1 px-4 cursor-pointer ${isActivelight(
                  "/admin/questions-template/template"
                )}`}
              >
                <FaLink size={18} />
                <span>Template</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
