import logo from "../../assets/logo.png";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { BsFillHCircleFill } from "react-icons/bs";

export default function Message({ data }) {
  const messages = [
    {
      sender: "user",
      receiver: "system",
      message:
        "Mero bibaha kaile hunxa? kasto swovav ki kanya bibaha hunchha?love marriage hunxa ki arranged?kun profession ko huna sakxin? date of birth:- 2047/12/18 samaye rati ko 11 bajera 3 min(राती) janma isthan banepa kavre.dhannyabad",
      date: "08 Apr, 2024 03:22 PM",
    },
    {
      sender: "user",
      receiver: "system",
      message:
        "Mero bibaha kaile hunxa? kasto swovav ki kanya bibaha hunchha?love marriage hunxa ki arranged?kun profession ko huna sakxin? date of birth:- 2047/12/18 samaye rati ko 11 bajera 3 min(राती) janma isthan banepa kavre.dhannyabad",
      date: "08 Apr, 2024 03:22 PM",
    },
    {
      sender: "system",
      receiver: "user",
      message:
        "AstroChats wants to sincerely thank you for sharing your question. We'll have an answer ready for you in the next 12 - 24 hours. We truly value your patience throughout this process.",
      date: "08 Apr, 2024 03:22 PM",
    },
    {
      sender: "user",
      receiver: "system",
      message:
        "AstroChats wants to sincerely thank you for sharing your question. We'll have an answer ready for you in the next 12 - 24 hours. We truly value your patience throughout this process.",
      date: "08 Apr, 2024 03:22 PM",
    },
  ];
  return (
    <div className=" border m-2 border-gray-300 w-full rounded-lg flex flex-col gap-2 text-xl flex-wrap bg-white">
      <div className="p-5 flex flex-col gap-5">
        {messages.map((message, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div
              className={
                message.sender === "user"
                  ? "flex gap-3"
                  : " flex gap-3 flex-row-reverse"
              }
            >
              <p className="text-sm font-semibold">
                {message.sender === "user"
                  ? `${data.name} (Question)`
                  : "Astrochats (System)"}
              </p>
              <p className="text-sm text-gray-500">{message.date}</p>
            </div>
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
                    ? "bg-green-700 text-white font-semibold w-[60%] p-3 rounded-lg"
                    : "bg-blue-900 text-white font-semibold w-[60%] p-3 rounded-lg"
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
          <div className="flex flex-col justify-center items-center w-full">
            <select
              id="zodiac"
              name="zodiac"
              className="p-3 rounded-md bg-transparent focus:border-none border focus:border border-gray-200 w-full outline-none"
            >
              <option className="" value="Select Message Type">
                Select Message Type
              </option>
              <option value="Translate Question">Translate Question</option>
              <option value="Ask Clarification From Customer">
                Ask Clarification From Customer
              </option>
              <option value="Ask Clarification From Astrologer">
                Ask Clarification From Astrologer
              </option>
              <option value="Give Clarification To Astrologer">
                Give Clarification To Astrologer
              </option>
              <option value="Give Answer">Give Answer</option>
            </select>
          </div>
          <div className="my-5 flex justify-between">
            <div className="flex gap-2">
              <div className="border border-gray-500 rounded-full p-2 hover:bg-red-500 transition duration-500">
                <FaRegArrowAltCircleUp className="hover:text-white text-gray-600" />
              </div>
              <div className="border border-gray-500 rounded-full p-2 hover:bg-red-500 transition duration-500">
                <BsFillHCircleFill className="hover:text-white text-gray-600" />
              </div>
            </div>
            <button className="px-5 py-1 text-sm border rounded-full border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 transition duration-500">
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
