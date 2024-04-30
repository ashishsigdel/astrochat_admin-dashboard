import React, { useState } from "react";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function AstrologerHelper() {
  const [openModal, setOpenModal] = useState(false);

  const messageType = [
    {
      SN: 1,
      title: "1st Question",
      description:
        "AstroChats wants to sincerely thank you for sharing your question. We'll have an answer ready for you in the next 12 - 24 hours. We truly value your patience throughout this process.",
      type: "1st question",
    },
  ];

  return (
    <div className="p-1 w-full">
      <div className="flex justify-between p-2 flex-wrap items-center">
        <p className="text-xl font-semibold">Astrologer Helper</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Dashboard</p>
          <p>/</p>
          <p>Astrologer Helper</p>
        </div>
      </div>

      <div className="m-2 bg-white p-3">
        {openModal && (
          <div className="fixed z-[999] bg-slate-300 mx-[10rem] p-3 w-[35rem]  border  rounded-md bg-red">
            <div className="">
              <div className="border-b flex justify-between text-2xl font-semibold">
                <p>Add Astrologer Helper</p>
                <div
                  className="p-2 hover:bg-slate-100 rounded-full cursor-pointer"
                  onClick={() => setOpenModal(!openModal)}
                >
                  <IoClose className="text-2xl font-bold" />
                </div>
              </div>
              <div className="my-5">
                <form className="">
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-1">
                      <label>Title(*)</label>
                      <input
                        type="text"
                        className="py-2 rounded-md w-[16rem]"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Astrologer Helper Type(*)</label>
                      <select className="py-2 rounded-md w-[16rem]">
                        <option value="">---Select type---</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-1">
                      <label>Message(*)</label>
                      <textarea
                        type="text"
                        className="py-2 rounded-md w-[32rem]"
                      />
                    </div>
                  </div>
                  <div className="my-3 border-t py-3">
                    <div className="flex gap-2 flex-row-reverse">
                      <button className="p-2 bg-lime-600 px-3 rounded-md">
                        Add
                      </button>
                      <button
                        onClick={() => setOpenModal(!openModal)}
                        className="p-2 bg-slate-200 px-3 border rounded-md"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="overflow-x-auto bg-white">
          <div className="py-2 border-y flex justify-between">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="py-2 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Add Message
            </button>
            <form>
              <span>Search: </span>
              <input
                type="text"
                className="w-32 rounded-lg items-end focus:outline-none"
              />
            </form>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>S.N</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>Title</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>Message</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>Type</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>Action</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                </tr>
              </thead>
              {messageType.map((message) => (
                <tbody key={message.id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {message.SN}
                    </th>
                    <td className="px-6 py-4">{message.title}</td>
                    <td className="px-6 py-4">{message.description}</td>
                    <td className="px-6 py-4">{message.type}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <div className="border p-2">
                          <button className="text-green-500">Edit</button>
                        </div>
                        <div className="border p-2">
                          <button className="text-gray-900">Delete</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="py-2 my-3 items-center border-y flex justify-between gap-5">
            <p>{`Showing 1 to 1 of ${messageType.length} entries`}</p>
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
