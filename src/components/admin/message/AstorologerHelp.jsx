import React from "react";
import { RiArrowUpDownLine } from "react-icons/ri";
import { Table } from "flowbite-react";

export default function AstrologerHelp() {
  const messageType = [
    {
      SN: 1,
      title: "N/A",
      description: "Astrologer Helper",
      type: "Astrologer Helper Type",
    },
  ];

  return (
    <div className="p-1 w-full">
      <div className="flex justify-between p-2 flex-wrap">
        <p className="text-xl font-semibold">Astrologer Helper</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Dashboard</p>
          <p>/</p>
          <p>Astrologer Helper</p>
        </div>
      </div>

      <div className="m-2 bg-white p-3">
        <div className="overflow-x-auto bg-white">
          <div className="py-2 border-y flex justify-between">
            <button className="py-2 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Add Type
            </button>
            <form>
              <span>Search: </span>
              <input
                type="text"
                className="w-32 rounded-lg items-end focus:outline-none"
              />
            </form>
          </div>
          <Table hoverable className="shadow-md">
            <Table.Head className="border-b-2">
              <Table.HeadCell className="text-left text-black">
                <div className="flex justify-between items-center px-3">
                  <p>S.N</p>
                  <RiArrowUpDownLine />
                </div>
              </Table.HeadCell>
              <Table.HeadCell className="text-left text-black">
                <div className="flex justify-between items-center px-3">
                  <p>Title</p>
                  <RiArrowUpDownLine />
                </div>
              </Table.HeadCell>
              <Table.HeadCell className="text-left text-black">
                <div className="flex justify-between items-center px-3">
                  <p>Astrologer Helper</p>
                  <RiArrowUpDownLine />
                </div>
              </Table.HeadCell>
              <Table.HeadCell className="text-left text-black">
                <div className="flex justify-between items-center px-3">
                  <p>Type</p>
                  <RiArrowUpDownLine />
                </div>
              </Table.HeadCell>

              <Table.HeadCell className="text-left text-black">
                <div className="flex justify-between items-center px-3">
                  <p>Action</p>
                  <RiArrowUpDownLine />
                </div>
              </Table.HeadCell>
            </Table.Head>
            {messageType.map((message) => (
              <Table.Body className="divide-y" key={message.id}>
                <Table.Row className="border-b ">
                  <Table.Cell>{message.SN}</Table.Cell>
                  <Table.Cell className="">{message.title}</Table.Cell>
                  <Table.Cell className="py-3 pr-3">
                    {message.description}
                  </Table.Cell>
                  <Table.Cell className="py-3 pr-3">{message.type}</Table.Cell>
                  <Table.Cell className="py-3">
                    <div className="flex gap-2">
                      <div className="border p-1">
                        <button className="text-green-500 text-sm">Edit</button>
                      </div>
                      <div className="border p-1">
                        <button className="text-gray-900 text-sm">
                          Delete
                        </button>
                      </div>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
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
