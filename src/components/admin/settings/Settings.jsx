import React from "react";
import { RiArrowUpDownLine } from "react-icons/ri";

export default function Settings() {
  const data = [
    {
      SN: 1,
      name: "Aries",
      id: "aries",
      alternatename: "मेष",
      Picture: "https://example.com/zodiac/aries.png",
    },
    {
      SN: 2,
      name: "Taurus",
      id: "taurus",
      alternatename: "वृष",
      Picture: "https://example.com/zodiac/taurus.png",
    },
    {
      SN: 3,
      name: "Gemini",
      id: "gemini",
      alternatename: "मिथुन",
      Picture: "https://example.com/zodiac/gemini.png",
    },
    {
      SN: 4,
      name: "Cancer",
      id: "cancer",
      alternatename: "कर्कट",
      Picture: "https://example.com/zodiac/cancer.png",
    },
    {
      SN: 5,
      name: "Leo",
      id: "leo",
      alternatename: "सिंह",
      Picture: "https://example.com/zodiac/leo.png",
    },
    {
      SN: 6,
      name: "Virgo",
      id: "virgo",
      alternatename: "कन्या",
      Picture: "https://example.com/zodiac/virgo.png",
    },
    {
      SN: 7,
      name: "Libra",
      id: "libra",
      alternatename: "तुला",
      Picture: "https://example.com/zodiac/libra.png",
    },
    {
      SN: 8,
      name: "Scorpio",
      id: "scorpio",
      alternatename: "वृश्चिक",
      Picture: "https://example.com/zodiac/scorpio.png",
    },
    {
      SN: 9,
      name: "Sagittarius",
      id: "sagittarius",
      alternatename: "धनु",
      Picture: "https://example.com/zodiac/sagittarius.png",
    },
    {
      SN: 10,
      name: "Capricorn",
      id: "capricorn",
      alternatename: "मकर",
      Picture: "https://example.com/zodiac/capricorn.png",
    },
    {
      SN: 11,
      name: "Aquarius",
      id: "aquarius",
      alternatename: "कुम्भ",
      Picture: "https://example.com/zodiac/aquarius.png",
    },
    {
      SN: 12,
      name: "Pisces",
      id: "pisces",
      alternatename: "मीन",
      Picture: "https://example.com/zodiac/pisces.png",
    },
  ];

  return (
    <div className="p-3 w-full">
      <div className="flex justify-between p-2 items-center">
        <p className="text-xl font-semibold">Zodiac Manage</p>
        <div className="flex gap-1 text-gray-500">
          <p className="text-blue-500">Home</p>
          <p>/</p>
          <p>Zodiac Manage</p>
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
              <th scope="col" className="px-6 py-3">
                <div className="flex justify-between items-center px-3">
                  <p>S.N</p>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex justify-between items-center px-3">
                  <p>Name</p>
                  <RiArrowUpDownLine />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex justify-between items-center px-3">
                  <p>Alternate Name</p>
                  <RiArrowUpDownLine />
                </div>
              </th>
            </tr>
          </thead>
          {data.map((zodiac) => (
            <tbody key={zodiac.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-4">{zodiac.SN}</th>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex gap-2 items-start">
                    <div>
                      <img
                        src={zodiac.Picture}
                        className="h-10 w-10 border-2 border-gray-500 p-1 rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-blue-500 font-semibold">
                        {zodiac.name}
                      </h3>
                      <p className="text-xs text-gray-500">{zodiac.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{zodiac.alternatename}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
