import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";

import { FiMenu } from "react-icons/fi";
import { FaSearch, FaUserCog } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";
import QuestionPage from "../../components/admin/questionCostu/QuestionPage";

export default function CustomerQustion() {
  const [openSearch, setOpenSearch] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

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
  return (
    <>
      <div className="flex">
        <div className="w-[15.5rem] mb-10 hidden sm:flex fixed h-full  flex-col overflow-auto bg-gray-800">
          <Sidebar />
        </div>
        <div className="w-full ml-16 overflow-x-auto sm:ml-60 bg-slate-100">
          <div className="flex w-full px-5 py-2 border-b h-14 justify-between items-center gap-2 text-gray-500 bg-white">
            <div className="flex gap-5 items-center">
              <Link to="/admin/help-center" className="flex gap-5">
                <div>
                  <FiMenu size={20} />
                </div>
                <div>
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
            <QuestionPage />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
