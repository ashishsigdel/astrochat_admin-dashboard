import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowAltCircleRight,
  FaCreditCard,
  FaMicrophone,
  FaQuestion,
  FaSearch,
  FaUsers,
} from "react-icons/fa";

export default function DashContent() {
  return (
    <div className="p-1 w-full">
      <div className="flex justify-between p-2 flex-wrap gap-3">
        <p className="text-xl font-semibold">Dashboard</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Home</p>
          <p>/</p>
          <p>Dashboard v1</p>
        </div>
      </div>
      <div className="p-2 flex justify-between gap-3 flex-wrap w-full">
        <div className="flex-1 ">
          <div className="bg-gray-700 text-white pt-2 pl-2 pr-2  rounded-t">
            <div className="flex justify-between items-center pb-3">
              <div className="">
                <h3 className="text-2xl font-semibold">6259</h3>
                <p>Costumers</p>
              </div>
              <div>
                <FaUsers size={35} className="opacity-15" />
              </div>
            </div>
          </div>
          <Link to="/admin/customers">
            <div className="flex gap-2 justify-center items-center bg-gray-800 text-white">
              <p>More info</p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
        <div className="flex-1 ">
          <div className="bg-cyan-400 text-white pt-2 pl-2 pr-2  rounded-t">
            <div className="flex justify-between items-center pb-3">
              <div className="">
                <h3 className="text-2xl font-semibold">6018</h3>
                <p>Total Questions</p>
              </div>
              <div>
                <FaQuestion size={35} className="opacity-25" />
              </div>
            </div>
          </div>
          <Link to="/admin/questions">
            <div className="flex gap-2 justify-center items-center bg-cyan-500 text-white">
              <p>More info</p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
        <div className="flex-1 ">
          <div className="bg-gray-400 text-white pt-2 pl-2 pr-2  rounded-t">
            <div className="flex justify-between items-center pb-3">
              <div className="">
                <h3 className="text-2xl font-semibold">5984</h3>
                <p>Total Free</p>
              </div>
              <div>
                <FaCreditCard size={35} className="opacity-15" />
              </div>
            </div>
          </div>
          <Link to="/admin/questions">
            <div className="flex gap-2 justify-center items-center bg-gray-500 text-white">
              <p>More info</p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="p-2 flex justify-between gap-3 flex-wrap w-full">
        <div className="flex-1 ">
          <div className="bg-green-600 text-white pt-2 pl-2 pr-2  rounded-t">
            <div className="flex justify-between items-center pb-3">
              <div className="">
                <h3 className="text-2xl font-semibold">34</h3>
                <p>Total Paid</p>
              </div>
              <div>
                <FaCreditCard size={35} className="opacity-15" />
              </div>
            </div>
          </div>
          <Link to="/admin/questions">
            <div className="flex gap-2 justify-center items-center bg-green-700 text-white">
              <p>More info</p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
        <div className="flex-1 ">
          <div className="bg-red-600 text-white pt-2 pl-2 pr-2  rounded-t">
            <div className="flex justify-between items-center pb-3">
              <div className="">
                <h3 className="text-2xl font-semibold">5929</h3>
                <p>Total Answered</p>
              </div>
              <div>
                <FaMicrophone size={35} className="opacity-15" />
              </div>
            </div>
          </div>
          <Link to="/admin/questions">
            <div className="flex gap-2 justify-center items-center bg-red-700 text-white">
              <p>More info</p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
        <div className="flex-1 ">
          <div className="bg-blue-600 text-white pt-2 pl-2 pr-2  rounded-t">
            <div className="flex justify-between items-center pb-3">
              <div className="">
                <h3 className="text-2xl font-semibold">13</h3>
                <p>Total Staff</p>
              </div>
              <div>
                <FaUsers size={35} className="opacity-15" />
              </div>
            </div>
          </div>
          <Link to="/admin/staff-management/moderator">
            <div className="flex gap-2 justify-center items-center bg-blue-700 text-white">
              <p>More info</p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
