import React from "react";
import { FaEye, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  const data = [
    {
      Customer: {
        email: "customer1@example.com",
        id: "C001",
      },
      Query: "How do I reset my password?",
      Created_At: "2024-04-25T12:00:00Z",
    },
    {
      Customer: {
        email: "customer2@example.com",
        id: "C002",
      },
      Query: "What are your business hours?",
      Created_At: "2024-04-25T12:05:00Z",
    },
    {
      Customer: {
        email: "customer3@example.com",
        id: "C003",
      },
      Query: "Do you offer discounts for bulk orders?",
      Created_At: "2024-04-25T12:10:00Z",
    },
    {
      Customer: {
        email: "customer4@example.com",
        id: "C004",
      },
      Query: "Can I track my order?",
      Created_At: "2024-04-25T12:15:00Z",
    },
    {
      Customer: {
        email: "customer5@example.com",
        id: "C005",
      },
      Query: "How can I contact customer support?",
      Created_At: "2024-04-25T12:20:00Z",
    },
    {
      Customer: {
        email: "customer6@example.com",
        id: "C006",
      },
      Query: "What payment methods do you accept?",
      Created_At: "2024-04-25T12:25:00Z",
    },
    {
      Customer: {
        email: "customer7@example.com",
        id: "C007",
      },
      Query: "Are returns accepted?",
      Created_At: "2024-04-25T12:30:00Z",
    },
    {
      Customer: {
        email: "customer8@example.com",
        id: "C008",
      },
      Query: "How long does shipping take?",
      Created_At: "2024-04-25T12:35:00Z",
    },
    {
      Customer: {
        email: "customer9@example.com",
        id: "C009",
      },
      Query: "What is your refund policy?",
      Created_At: "2024-04-25T12:40:00Z",
    },
    {
      Customer: {
        email: "customer10@example.com",
        id: "C010",
      },
      Query: "Do you offer gift wrapping?",
      Created_At: "2024-04-25T12:45:00Z",
    },
  ];

  return (
    <div className="p-1 px-3 w-full">
      <div className="flex justify-between p-2 items-center">
        <p className="text-xl font-semibold">Help Center</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Home</p>
          <p>/</p>
          <p>Help Center</p>
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

      <div className="p-3 relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-1 py-4">
                Customer
              </th>
              <th scope="col" className="px-1 py-4">
                Query
              </th>
              <th scope="col" className="px-1 py-4">
                Created Date
              </th>
              <th scope="col" className="px-1 py-4">
                Action
              </th>
            </tr>
          </thead>
          {data.map((user) => (
            <tbody key={user.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div>
                    <p className="text-black font-semibold text-sm">
                      Email:{" "}
                      <span className="font-normal text-sm">
                        {user.Customer.email}
                      </span>
                    </p>
                    <p className="text-black font-semibold text-sm">
                      Id:{" "}
                      <span className="font-normal text-sm">
                        {user.Customer.id}
                      </span>
                    </p>
                  </div>
                </th>
                <td className="px-1 py-4">{user.Query}</td>
                <td className="px-1 py-4">{user.Created_At}</td>
                <td className="px-1 py-4">
                  <Link to={user.Customer.id}>
                    <div className="border p-2 w-fit text-blue-500 hover:text-white hover:bg-blue-600">
                      <FaEye className="" size={15} />
                    </div>
                  </Link>
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
