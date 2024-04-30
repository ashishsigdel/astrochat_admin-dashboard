import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoClose, IoMail } from "react-icons/io5";
import { useState } from "react";

export function TableCustomer() {
  const [openModal, setOpenModal] = useState(false);
  const data = [
    {
      sn: 1,
      name: "John Doe",
      profilePic: "https://astrochats.com/assets/custom/image/logo.png",
      id: "38478",
      birthDetails: {
        DOB: "01/01/1990",
        TOB: "04:30:00",
        Age: "21",
      },
      zodiac: "Aries",
      details: {
        Gender: "Male",
        Country: "India",
        Device_Type: "Android",
      },
      action: "Edit",
    },
    {
      sn: 2,
      name: "John Doe",
      profilePic: "https://astrochats.com/assets/custom/image/logo.png",
      id: "38477",
      birthDetails: {
        DOB: "01/01/1990",
        TOB: "04:30:00",
        Age: "21",
      },
      zodiac: "Aries",
      details: {
        Gender: "Male",
        Country: "India",
        Device_Type: "Android",
      },
      action: "Edit",
    },
    {
      sn: 3,
      name: "Jane Smith",
      profilePic: "https://astrochats.com/assets/custom/image/logo.png",
      id: "38476",
      birthDetails: {
        DOB: "03/15/1985",
        TOB: "09:15:00",
        Age: "36",
      },
      zodiac: "Pisces",
      details: {
        Gender: "Female",
        Country: "United States",
        Device_Type: "iOS",
      },
      action: "Delete",
    },
    {
      sn: 4,
      name: "Alice Johnson",
      profilePic: "https://astrochats.com/assets/custom/image/logo.png",
      id: "38475",
      birthDetails: {
        DOB: "05/20/1992",
        TOB: "14:00:00",
        Age: "29",
      },
      zodiac: "Taurus",
      details: {
        Gender: "Female",
        Country: "Canada",
        Device_Type: "iOS",
      },
      action: "Edit",
    },
  ];

  return (
    <div className="overflow-x-auto bg-white ">
      {openModal && (
        <div className="fixed z-[999] bg-slate-300 mx-[10rem] p-3 w-[35rem] mt-[-10rem]  border  rounded-md bg-red">
          <div className="">
            <div className="border-b flex justify-between text-2xl font-semibold">
              <p>Samrat Acharya - 33</p>
              <div
                className="p-2 hover:bg-slate-100 rounded-full cursor-pointer"
                onClick={() => setOpenModal(!openModal)}
              >
                <IoClose className="text-2xl font-bold" />
              </div>
            </div>
            <div className="my-5">
              <form className="w-full">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Notification Title"
                    className="w-[33rem] rounded-md text-gray-500"
                  />
                </div>
                <div className="my-2">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="w-[33rem] rounded-md text-gray-500"
                  >
                    Notification Text
                  </textarea>
                </div>
                <div className="my-2 text-blue-600 w-full text-center border border-blue-600 py-1 rounded-md">
                  <button>Send Notification</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.N
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Birth Details
              </th>
              <th scope="col" className="px-6 py-3">
                Zodiac
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {data.map((user) => (
            <tbody key={user.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.sn}
                </th>
                <td className="px-6 py-4">
                  <div className="flex gap-2 items-start">
                    <div>
                      <img
                        src={user.profilePic}
                        className="h-10 border-2 border-gray-500 p-1 rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-blue-500 font-semibold">
                        {user.name}
                      </h3>
                      <p className="text-xs text-gray-500">{user.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-black font-semibold text-sm">
                      Date of Birth:{" "}
                      <span className="font-normal">
                        {user.birthDetails.DOB}
                      </span>
                    </p>
                    <p className="text-black font-semibold text-sm">
                      Time of Birth:{" "}
                      <span className="font-normal">
                        {user.birthDetails.TOB}
                      </span>
                    </p>
                    <p className="text-black font-semibold text-sm">
                      Age:{" "}
                      <span className="font-normal">
                        {user.birthDetails.Age}
                      </span>
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">{user.zodiac}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-black font-semibold text-sm">
                      Gender:{" "}
                      <span className="font-normal">{user.details.Gender}</span>
                    </p>
                    <p className="text-black font-semibold text-sm">
                      Country:{" "}
                      <span className="font-normal">
                        {user.details.Country}
                      </span>
                    </p>
                    <p className="text-black font-semibold text-sm">
                      Device Type:{" "}
                      <span className="font-normal">
                        {user.details.Device_Type}
                      </span>
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Link to={user.id}>
                      <div className="border p-2">
                        <FaEye className="text-blue-500" size={15} />
                      </div>
                    </Link>
                    <div
                      onClick={() => setOpenModal(!openModal)}
                      className="border p-2 cursor-pointer"
                    >
                      <IoMail className="text-gray-900" size={15} />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="py-2 my-3 items-center border-y flex justify-between gap-5">
        <p>{`Showing 1 to 1 of ${data.length} entries`}</p>
        <div className="flex items-center">
          <p className="p-2 border">Previous</p>
          <p className="p-2 border px-4 bg-blue-600">1</p>
          <p className="p-2 border">Next</p>
        </div>
      </div>
    </div>
  );
}
