import React from "react";
import { TableCustomer } from "./TableCustomer";

export default function Customers() {
  const data = [
    {
      sn: 1,
      name: "John Doe",
      profilePic: "https://astrochats.com/assets/custom/image/logo.png",
      id: "38478",
      birthDetails: [
        {
          DOB: "01/01/1990",
          TOB: "04:30:00",
          Age: "21",
        },
      ],
      zodiac: "Aries",
      details: [
        {
          Gender: "Male",
          Country: "India",
          Device_Type: "Android",
        },
      ],
      action: "Edit",
    },
  ];

  return (
    <div className="p-3 w-full">
      <div className="flex justify-between p-2 ">
        <p className="text-xl font-semibold">Customers</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Home</p>
          <p>/</p>
          <p>Customers</p>
        </div>
      </div>
      <form className="p-3 w-full ">
        <div className="flex gap-2 w-full justify-between flex-wrap">
          <div className="flex-1 w-full">
            <select
              id="country"
              className="text-sm text-gray-500 focus:outline-none rounded-md"
            >
              <option value="Select Country">Select Country</option>
              <option value="Nepal">Nepal</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <select
              id="zodiac"
              className="text-sm text-gray-500 focus:outline-none rounded-md"
            >
              <option value="Select Device">Select Device</option>
              <option value="Microphone">Microphone</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Question">Question</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <select
              id="zodiac"
              className="text-sm text-gray-500 focus:outline-none rounded-md"
            >
              <option value="Select Zodiac">Select Zodiac</option>
              <option value="Aries">Aries</option>
              <option value="Taurus">Taurus</option>
              <option value="Gemini">Gemini</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <select
              id="zodiac"
              className="text-sm text-gray-500 focus:outline-none rounded-md"
            >
              <option value="Select Gender">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <select
              id="zodiac"
              className="text-sm text-gray-500 focus:outline-none rounded-md"
            >
              <option value="Select Sortby">Select Sortby</option>
              <option value="Name">Name</option>
              <option value="Date">Date</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
          <div className="flex-1 w-full text-sm text-gray-500 ">
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none rounded-md"
            />
          </div>
        </div>
        <div className="m-2">
          <button className="w-full border rounded-md my-2 text-blue-600 border-blue-600 py-1 hover:text-white hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </div>
      </form>
      <div className="m-2 bg-white p-3">
        <TableCustomer />
      </div>
    </div>
  );
}
