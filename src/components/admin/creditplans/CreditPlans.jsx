import React from "react";
import { RiArrowUpDownLine } from "react-icons/ri";

export default function CreditPlans() {
  const data = [
    {
      SN: 1,
      title: "Diwali Special",
      Details: {
        price: "$19.99",
        purchasecount: 100,
        questionallowed: 5,
      },
      status: "enabled",
    },
    {
      SN: 2,
      title: "New Year Offer",
      Details: {
        price: "$29.99",
        purchasecount: 50,
        questionallowed: 3,
      },
      status: "enabled",
    },
    {
      SN: 3,
      title: "Free Question",
      Details: {
        price: "Free",
        purchasecount: 1000,
        questionallowed: 1,
      },
      status: "enabled",
    },
    {
      SN: 4,
      title: "Signup Bonus",
      Details: {
        price: "N/A",
        purchasecount: 500,
        questionallowed: 0,
      },
      status: "enabled",
    },
    {
      SN: 5,
      title: "Holiday Sale",
      Details: {
        price: "$49.99",
        purchasecount: 200,
        questionallowed: 2,
      },
      status: "disabled",
    },
  ];

  return (
    <div className="p-1 w-full">
      <div className="flex justify-between p-2 ">
        <p className="text-xl font-semibold">Credit Plans</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Home</p>
          <p>/</p>
          <p>Credit Plans</p>
        </div>
      </div>
      <div className="mx-2">
        <form className="w-full flex gap-3 items-center">
          <div className="flex gap-2 w-full justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="w-full my-2"
            />
          </div>
          <button className="border rounded-md px-10 text-blue-600 border-blue-600 py-2 hover:text-white hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>
      </div>

      <div class="relative overflow-x-auto m-2">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                <div className="flex justify-between items-center px-3">
                  <p>S.N</p>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div className="flex justify-between items-center px-3">
                  <p>Title</p>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div className="flex justify-between items-center px-3">
                  <p>Details</p>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div className="flex justify-between items-center px-3">
                  <p>Status</p>
                  <RiArrowUpDownLine />
                </div>
              </th>
            </tr>
          </thead>
          {data.map((title) => (
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {title.SN}
                </th>
                <td class="px-6 py-4">{title.title}</td>
                <td class="px-6 py-4">
                  <div>
                    <p className="text-black font-semibold text-sm">
                      Price:{" "}
                      <span className="font-normal">{title.Details.price}</span>
                    </p>
                    <p className="text-black font-semibold text-sm">
                      Purchase Count:{" "}
                      <span className="font-normal">
                        {title.Details.purchasecount}
                      </span>
                    </p>
                    <p className="text-black font-semibold text-sm">
                      Question Allowed:{" "}
                      <span className="font-normal">
                        {title.Details.questionallowed}
                      </span>
                    </p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  {title.status === "enabled" ? (
                    <p className="text-green-600">Enabled</p>
                  ) : (
                    <p className="text-red-500">Disabled</p>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className="m-2 bg-white p-3">
        <div className="overflow-x-auto bg-white">
          <div className="py-2 my-3 items-center border-y flex justify-between">
            <p>{`Showing 1 to 1 of ${data.length} entries`}</p>
            <div className="flex items-center">
              <p className="p-2 border">Previous</p>
              <p className="p-2 border px-4 bg-blue-600">1</p>
              <p className="p-2 border">Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
