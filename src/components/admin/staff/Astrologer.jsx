import React, { useState } from "react";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Astrologer() {
  const [openModal, setOpenModal] = useState(false);
  const modData = [
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

  return (
    <div className="p-1 w-full">
      <div className="flex justify-between p-2 flex-wrap px-3">
        <p className="text-xl font-semibold">Astrologer Manage</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Dashboard</p>
          <p>/</p>
          <p>staff</p>
          <p>/</p>
          <p>Astrologer</p>
        </div>
      </div>

      <div className="m-2 bg-white p-3">
        {openModal && (
          <div className="fixed z-[999] mt-[-4rem] bg-slate-300 mx-[10rem] p-3 w-[35rem] border rounded-md">
            <div className="">
              <div className="border-b flex justify-between text-2xl font-semibold">
                <p>Add Astrologer</p>
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
                      <label>Name(*)</label>
                      <input type="text" className="py-2 rounded-md w-64" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Phone Number(*)</label>
                      <input type="text" className="py-2 rounded-md w-64" />
                    </div>
                  </div>
                  <div className="flex gap-4 w-full my-4">
                    <div className="flex flex-col gap-1">
                      <label>Gender(*)</label>
                      <select className="py-2 rounded-md w-64">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Show in App(*)</label>
                      <select className="py-2 rounded-md w-64">
                        <option value="male">Visible</option>
                        <option value="female">Invisible</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-1">
                      <label>Rating(*)</label>
                      <input type="text" className="py-2 rounded-md w-64" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Experience(*)</label>
                      <input type="text" className="py-2 rounded-md w-64" />
                    </div>
                  </div>
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-1">
                      <label>Email(*)</label>
                      <input type="email" className="py-2 rounded-md w-64" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Password(*)</label>
                      <input type="password" className="py-2 rounded-md w-64" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 my-2">
                    <label>Image(*)</label>
                    <input type="file" className="py-2 rounded-md w-64" />
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
          <div className="py-2 border-y flex justify-between gap-5">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="py-2 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Add Astrologer
            </button>
            <form>
              <span>Search: </span>
              <input
                type="text"
                className="w-32 rounded-lg items-end focus:outline-none"
              />
            </form>
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-1 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>S.N</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                  <th scope="col" class="px-1 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>Name</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                  <th scope="col" class="px-1 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>Email</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                  <th scope="col" class="px-1 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>Gender</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                  <th scope="col" class="px-1 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>Phone Number</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                  <th scope="col" class="px-1 py-3">
                    <div className="flex justify-between items-center px-3">
                      <p>Action</p>
                      <RiArrowUpDownLine />
                    </div>
                  </th>
                </tr>
              </thead>
              {modData.map((astroAstrologer) => (
                <tbody key={astroAstrologer.id}>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {astroAstrologer.SN}
                    </th>
                    <td class="px-1 py-4">
                      <div className="flex gap-2 items-start">
                        <div>
                          <img
                            src={astroAstrologer.profilePic}
                            className="h-10 border-2 border-gray-500 p-1 rounded-full"
                            alt=""
                          />
                        </div>
                        <div>
                          <h3 className="text-blue-500 font-semibold">
                            {astroAstrologer.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {astroAstrologer.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-1 py-4">
                      <div>
                        <p className="text-black font-semibold text-sm">
                          Email:{" "}
                          <span className="font-normal">
                            {astroAstrologer.email}
                          </span>
                        </p>
                      </div>
                    </td>
                    <td class="px-1 py-4">
                      <div>
                        <p className="text-black font-semibold text-sm">
                          Gender:{" "}
                          <span className="font-normal">
                            {astroAstrologer.gender}
                          </span>
                        </p>
                      </div>
                    </td>
                    <td class="px-1 py-4">
                      <div>
                        <p className="text-black font-semibold text-sm">
                          Phone Number:{" "}
                          <span className="font-normal">
                            {astroAstrologer.phone}
                          </span>
                        </p>
                      </div>
                    </td>
                    <td class="px-1 py-4">
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
            <p>{`Showing 1 to 1 of ${modData.length} entries`}</p>
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
