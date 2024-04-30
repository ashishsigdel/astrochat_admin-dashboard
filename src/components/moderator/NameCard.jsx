import React from "react";

export default function NameCard() {
  const data = {
    name: "Ashish Sigdel",
  };
  return (
    <div className="p-5 border border-gray-300 border-t-2 border-t-blue-500 rounded-lg flex flex-col gap-2 text-xl flex-wrap bg-white">
      <h5 className="text-gray-600 font-bold">{`Dear ${data.name} `}</h5>
      <p className="text-gray-500">
        The only way to do great work is to love what you do.
      </p>
      <div className="">
        <p className="text-gray-500">With Regards</p>
        <h3 className="text-gray-600 font-bold">Astrochats</h3>
      </div>
    </div>
  );
}
