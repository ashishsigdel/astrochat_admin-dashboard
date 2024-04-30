import logo from "../../../assets/logo.png";
import { BsFillHCircleFill } from "react-icons/bs";

export default function Message({ data }) {
  const messages = [
    {
      sender: "user",
      receiver: "system",
      message: "hlo",
      date: "08 Apr, 2024 03:22 PM",
    },
    {
      sender: "user",
      receiver: "system",
      message: "maile hijo euta question sodeko thiye reply aayena",
      date: "08 Apr, 2024 03:22 PM",
    },
    {
      sender: "system",
      receiver: "user",
      message:
        "AstroChats wants to sincerely thank you for sharing your question. We'll have an answer ready for you in the next 12 - 24 hours. We truly value your patience throughout this process.",
      date: "08 Apr, 2024 03:22 PM",
    },
  ];
  return (
    <div className=" border m-2 border-gray-300 w-full rounded-lg flex flex-col gap-2 text-xl flex-wrap bg-white">
      <div className="m-3 px-3 font-semibold text-white bg-blue-600 rounded-full w-fit ">
        <h3>Queries</h3>
      </div>
      <div className="p-2 flex flex-col gap-5">
        {messages.map((message, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div
              className={
                message.sender === "user"
                  ? "flex gap-3"
                  : " flex gap-3 flex-row-reverse"
              }
            ></div>
            <div
              className={
                message.sender === "user"
                  ? "flex gap-1"
                  : "flex gap-1 flex-row-reverse"
              }
            >
              <img src={logo} className="w-12 h-12" alt="" />
              <p
                className={
                  message.sender === "user"
                    ? "bg-green-700 text-white font-semibold w-[60%] p-3 rounded-lg text-xs"
                    : "bg-blue-900 text-white font-semibold w-[60%] p-3 rounded-lg text-xs"
                }
              >
                {message.message}
              </p>
            </div>
          </div>
        ))}
      </div>
      <form className="bg-gray-100 px-5">
        <div className="my-5">
          <textarea
            id="message"
            className="border w-full p-3 text-sm rounded-lg focus:outline-none"
            placeholder="Type Message..."
          />

          <div className="my-5 flex justify-between">
            <div className="flex gap-2">
              <div className="border border-gray-500 rounded-full p-2 hover:bg-red-500 transition duration-500">
                <BsFillHCircleFill className="hover:text-white text-gray-600" />
              </div>
            </div>
            <button className="px-5 py-1 text-sm border rounded-full border-lime-500 text-lime-500 hover:text-white hover:bg-lime-500 transition duration-500">
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
