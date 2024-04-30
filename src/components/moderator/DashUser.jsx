import React from "react";
import userlogo from "../../assets/user1-128x128.jpg";
import { FaUser } from "react-icons/fa";

export default function DashUser() {
  const data = {
    name: "Ashish Sigdel",
    logo: userlogo, // Fix the way you're importing userlogo
    moderator_id: "41722",
    email: "a.asis.sigdel01@gmail.com",
    Gender: "Male",
    Zodiac: "Leo",
    Contact: "9863525170",
    Query: {
      paid: 0,
      free: 0,
      total: 0,
    },
  };

  return (
    <div className="p-5 border border-gray-300 border-t-2 border-t-green-500 rounded-lg flex flex-col gap-3 text-xl flex-wrap bg-white w-full">
      <div className="flex gap-2">
        <img
          src={data.logo} // Use data.logo instead of userlogo
          alt="logo"
          className="w-12 h-12 object-cover rounded-full border-2 border-gray-400 p-1"
        />
        <div>
          <h3 className="font-semibold">{data.name}</h3>
          <p className="text-sm text-gray-500">
            Moderator Id: {data.moderator_id}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-3 w-full flex-wrap">
        <div className="bg-gray-200 p-3 rounded-lg h-fit">
          <div className="flex gap-3 items-center text-green-500">
            <FaUser />
            <p className="text-lg">Identification</p>
          </div>
          <div className="my-3">
            <p className="font-bold">Username:</p>
            <p>{data.email}</p>
          </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-lg h-fit pr-10">
          <div className="flex gap-3 items-center text-red-500">
            <FaUser />
            <p className="text-lg">Information</p>
          </div>
          <div className="mt-3">
            <p className="font-bold">Gender:</p>
            <p>{data.Gender}</p>
          </div>
          <div className="mb-3">
            <p className="font-bold">Contact:</p>
            <p>{data.Contact}</p>
          </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-lg w-full md:w-80 h-fit">
          <div className="flex gap-3 items-center text-red-500">
            <FaUser />
            <p className="text-lg">Query Received</p>
          </div>
          <div className="my-3 flex justify-between gap-5 w-full">
            <div>
              <h5>Total</h5>
              <p>{data.Query.total}</p>
            </div>
            <div>
              <h5>Paid</h5>
              <p>{data.Query.paid}</p>
            </div>
            <div>
              <h5>Free</h5>
              <p>{data.Query.free}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
