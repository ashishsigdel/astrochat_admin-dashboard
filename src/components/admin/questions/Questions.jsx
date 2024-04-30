import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Questions() {
  const [showAll, setShowAll] = useState(false);

  const Questions = [
    {
      name: "Krishna Adhikari",
      Country: "Nepal",
      flag: "🇳🇵",
      Id: "34783",
      Message: "What jobs align with my astrological profile?",
      Date: "08 Apr, 2024 03:22 PM",
      Answered: false,
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },

    {
      name: "Sofia Rodriguez",
      Country: "India",
      flag: "🇮🇳",
      Id: "23957",
      Message: "How can I improve my relationship with my teenager?",
      Date: "15 Mar, 2024 10:45 AM",
      Answered: false,
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
    {
      name: "Liam Johnson",
      Country: "United States",
      flag: "🇺🇸",
      Id: "84562",
      Message: "What are some effective ways to reduce stress at work?",
      Date: "21 Feb, 2024 08:17 AM",
      Answered: true,
      Answered_Date: "24 Apr, 2024 12:00 PM",
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
    {
      name: "Priya Patel",
      Country: "Nepal",
      flag: "🇳🇵",
      Id: "42691",
      Message: "How can I balance my career and personal life?",
      Date: "03 Jan, 2024 12:30 PM",
      Answered: true,
      Answered_Date: "24 Apr, 2024 12:00 PM",
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
    {
      name: "Matteo Rossi",
      Country: "Nepal",
      flag: "🇳🇵",
      Id: "71258",
      Message: "What steps should I take to start my own business?",
      Date: "19 Nov, 2023 09:52 AM",
      Answered: true,
      Answered_Date: "24 Apr, 2024 12:00 PM",
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
    {
      name: "Aisha Khan",
      Country: "Nepal",
      flag: "🇳🇵",
      Id: "59834",
      Message: "How can I overcome procrastination and boost productivity?",
      Date: "07 Oct, 2023 04:15 PM",
      Answered: true,
      Answered_Date: "24 Apr, 2024 12:00 PM",
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
    {
      name: "Juan Garcia",
      Country: "Nepal",
      flag: "🇳🇵",
      Id: "37549",
      Message: "What are some healthy habits for a busy lifestyle?",
      Date: "25 Sep, 2023 11:20 AM",
      Answered: true,
      Answered_Date: "26 Sep, 2023 11:20 AM",
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
    {
      name: "Elena Petrova",
      Country: "Nepal",
      flag: "🇳🇵",
      Id: "92136",
      Message: "How can I improve my communication skills?",
      Date: "12 Aug, 2023 02:55 PM",
      Answered: true,
      Answered_Date: "24 Apr, 2024 12:00 PM",
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
    {
      name: "Mohammed Ali",
      Country: "Nepal",
      flag: "🇳🇵",
      Id: "46382",
      Message: "What are some effective strategies for saving money?",
      Date: "29 Jul, 2023 09:10 AM",
      Answered: true,
      Answered_Date: "24 Apr, 2024 12:00 PM",
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
    {
      name: "Emilia Santos",
      Country: "Nepal",
      flag: "🇳🇵",
      Id: "83729",
      Message: "How can I develop my leadership skills?",
      Date: "14 Jun, 2023 01:40 PM",
      Answered: true,
      Answered_Date: "24 Apr, 2024 12:00 PM",
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
    {
      name: "Chen Wei",
      Country: "Nepal",
      flag: "🇳🇵",
      Id: "57294",
      Message: "What are some effective ways to manage time efficiently?",
      Date: "02 May, 2023 10:05 AM",
      Answered: true,
      Answered_Date: "24 Apr, 2024 12:00 PM",
      ProfilePic: "https://astrochats.com/assets/custom/image/logo.png",
    },
  ];
  const displayedQuestions = showAll ? Questions : Questions.slice(0, 8);

  const messageType = [
    "Raw",
    "In progress by moderator",
    "Clarification by moderator",
    "Translated by moderator",
    "In Progress by Astrologer",
    "Clarification by Astrologer",
    "Translated by AStrologer",
    "Answered",
  ];

  return (
    <div className="p-3 relative overflow-x-auto m-2">
      <div className="flex justify-between p-2 items-center">
        <p className="text-xl font-semibold">Questions</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Home</p>
          <p>/</p>
          <p>Questions</p>
        </div>
      </div>
      <div className="mx-2">
        <form className="w-full flex gap-3 items-center">
          <div className="flex gap-2 w-full justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="w-full my-2 rounded-md"
            />
          </div>
          <button className="border rounded-md px-10 text-blue-600 border-blue-600 py-2 hover:text-white hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-between py-2 px-3 border-b bg-white">
        <p className="font-semibold">Latest paid Questions</p>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-green-600 border border-green-600 rounded-full px-4 py-1 text-sm hover:bg-green-600 hover:text-white transition duration-300"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          {displayedQuestions.map((question, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {question.flag}
              </th>
              <td className="px-6 py-4">
                <div className="flex gap-1 items-center">
                  <img
                    src={question.ProfilePic}
                    className="h-9 w-9 p-1 border-2 border-gray-500 rounded-full"
                    alt=""
                  />
                  <div className="w-36 flex flex-col">
                    <h3 className="text-blue-600 line-clamp-1">
                      {question.name}
                    </h3>
                    <p className="text-xs text-gray-500">{question.Id}</p>
                  </div>
                </div>
              </td>
              <td className="px-3 py-4 ">
                <p className="text-sm break-words">{question.Message}</p>
                <div className="text-xs text-gray-500">{`Asked: ${question.Date}`}</div>
                {question.Answered && (
                  <div className="text-xs text-gray-500">{`Answered: ${question.Answered_Date}`}</div>
                )}
              </td>
              <td className="px-6 py-3">
                <div className="flex justify-between items-center gap-2">
                  <form className="max-w-sm mx-auto">
                    <select
                      id="answersType"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    >
                      {messageType.map((type, index) => (
                        <option key={type[index]} selected={question.Answered}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </form>
                  <div className="flex gap-2">
                    <Link to={`/admin/question/astrologer/${question.Id}`}>
                      <div className="p-2 border border-blue-600">
                        <FaTelegramPlane className="text-blue-600" />
                      </div>
                    </Link>
                    <Link to={`/admin/question/analyst/${question.Id}`}>
                      <div className="p-2 border border-red-600">
                        <FaTelegramPlane className="text-red-600" />
                      </div>
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-2 my-3 mx-5 items-center border-y flex justify-between gap-5">
        <p>{`Showing 1 to ${displayedQuestions.length} of ${Questions.length} entries`}</p>
        <div className="flex items-center">
          <p className="p-2 border">Previous</p>
          <p className="p-2 border px-4 bg-blue-600">1</p>
          <p className="p-2 border">Next</p>
        </div>
      </div>
    </div>
  );
}
