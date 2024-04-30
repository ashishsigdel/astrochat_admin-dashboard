import React from "react";
import { TableRawCustomer } from "./TableRawaCustomer";

export default function RawCustomer() {
  return (
    <div className="p-3 w-full">
      <div className="flex justify-between p-2 items-center gap-2">
        <p className="text-xl font-semibold">Raw Customers</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Home</p>
          <p>/</p>
          <p>Raw Customers</p>
        </div>
      </div>
      <form className="p-3 w-full">
        <div className="flex gap-2 w-full justify-between">
          <div className="flex-1 w-full">
            <select
              id="zodiac"
              className="text-sm text-gray-500 focus:outline-none rounded-md w-full h-9"
            >
              <option value="Select Device">Select Device</option>
              <option value="Microphone">Microphone</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Question">Question</option>
            </select>
          </div>

          <div className="flex-1 text-sm text-gray-500 focus:outline-none rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="h-9 rounded-md"
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
        <TableRawCustomer />
      </div>
    </div>
  );
}
