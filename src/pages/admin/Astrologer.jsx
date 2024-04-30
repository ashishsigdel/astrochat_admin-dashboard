import { FiMenu } from "react-icons/fi";
import Sidebar from "../../components/admin/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaUserCog } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export default function Astrologer() {
  const [openSearch, setOpenSearch] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  const astrologer = [
    {
      SN: 1,
      name: "John Doe",
      id: "JD123",
      email: "johndoe@example.com",
      gender: "Male",
      phone: "+1234567890",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
    {
      SN: 2,
      name: "Jane Smith",
      id: "JS456",
      email: "janesmith@example.com",
      gender: "Female",
      phone: "+1987654321",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
    {
      SN: 3,
      name: "Alice Johnson",
      id: "AJ789",
      email: "alicejohnson@example.com",
      gender: "Female",
      phone: "+1122334455",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
    {
      SN: 4,
      name: "Bob Williams",
      id: "BW234",
      email: "bobwilliams@example.com",
      gender: "Male",
      phone: "+1654321897",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
    {
      SN: 5,
      name: "David Lee",
      id: "DL567",
      email: "davidlee@example.com",
      gender: "Male",
      phone: "+1987456321",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
    {
      SN: 6,
      name: "Emily Brown",
      id: "EB890",
      email: "emilybrown@example.com",
      gender: "Female",
      phone: "+1765432987",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
    {
      SN: 7,
      name: "Michael Johnson",
      id: "MJ345",
      email: "michaeljohnson@example.com",
      gender: "Male",
      phone: "+1654321876",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
    {
      SN: 8,
      name: "Olivia Wilson",
      id: "OW678",
      email: "oliviawilson@example.com",
      gender: "Female",
      phone: "+1987654321",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
    {
      SN: 9,
      name: "Samuel Taylor",
      id: "ST901",
      email: "samueltaylor@example.com",
      gender: "Male",
      phone: "+1234567890",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
    {
      SN: 10,
      name: "Sophia Clark",
      id: "SC234",
      email: "sophiaclark@example.com",
      gender: "Female",
      phone: "+1765432987",
      profilePic: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
    },
  ];

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
    <div className="min-h-screen">
      <div className="w-[15.5rem] mb-10 hidden sm:flex fixed h-full  flex-col overflow-auto bg-gray-800">
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
        <div className="absolute left-[55%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-3 w-96 border rounded-md">
          <div className="border-b flex justify-between text-2xl font-semibold">
            <p>Transfer Question to Astrologer</p>
            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <Link to="/admin/dashboard">
                <IoClose className="text-2xl font-bold" />
              </Link>
            </div>
          </div>
          <div className="my-5">
            <form>
              <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <label className="text-sm">Search Astrologer</label>
                  <input
                    type="text"
                    className="py-2 rounded-md w-80 items-center"
                    placeholder="Name of Astrologer"
                  />
                </div>
              </div>

              {/* Astrologer List */}
              <div className="my-3 h-40 overflow-y-auto">
                {astrologer.map((analyAstrologer) => (
                  <div
                    className="flex gap-2 items-start my-2"
                    key={analyAstrologer.id}
                  >
                    <img
                      src={analyAstrologer.profilePic}
                      className="h-10 border-2 border-gray-500 rounded-full"
                      alt=""
                    />
                    <div>
                      <h3 className="text-blue-500 font-semibold">
                        {analyAstrologer.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {analyAstrologer.id}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-3 border-t border-gray-950 pt-3">
                <div className="flex justify-end gap-2">
                  <button className="p-2 bg-green-600 px-3 rounded-md text-white">
                    Transfer
                  </button>
                  <Link to="/admin/dashboard">
                    <button className="p-2 bg-gray-200 px-3 border rounded-md">
                      Close
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
