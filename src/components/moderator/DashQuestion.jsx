import React from "react";
import logo from "../../assets/logo.png";

export default function DashQuestion() {
  const stack = {
    sender: "Kristina",
    message:
      "Hello. I would like to know if my health will improve in the near future and if my financial life will improve in the coming year (whether there will be big financial changes and how). Thanks in advance.",
  };
  return (
    <div className="border border-gray-300 border-t-2 border-t-yellow-500 rounded-lg flex flex-col gap-3 text-xl flex-wrap bg-white min-h-80">
      <div className="border-b p-3 border-gray-200">
        <p className="text-sm font-bold">Questions in you stack</p>
      </div>
      <div className="px-2 flex flex-col gap-1">
        <h3 className="text-sm font-semibold">{stack.sender}</h3>
        <div className="flex gap-2">
          <img src={logo} alt="" className="h-10 w-10" />
          <div className="bg-gray-300 p-3 rounded-lg">
            <p className="text-sm text-gray-600">{stack.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
