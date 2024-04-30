import React from "react";

export default function Count({ data }) {
  return (
    <div className="pt-5 pb-2 m-2 border border-gray-300 border-t-2 border-t-blue-500 rounded-lg flex flex-col text-sm flex-wrap bg-white w-full justify-center items-center">
      <div className="flex gap-2 my-2 border-b w-full px-3">
        <div>
          <p className="text-sm font-normal">Total Qustion: </p>
        </div>
        <div>
          <p className="text-blue-500">{data.totalQues}</p>
        </div>
      </div>
      <div className="flex gap-2 my-2 border-b w-full px-3">
        <div>
          <p className="text-sm font-normal">Total Paid Qustion: </p>
        </div>
        <div>
          <p className="text-blue-500">{data.totalPQues}</p>
        </div>
      </div>
      <div className="flex gap-2 my-2 border-b w-full px-3">
        <div>
          <p className="text-sm font-normal">Total Free Qustion: </p>
        </div>
        <div>
          <p className="text-blue-500">{data.totalFQues}</p>
        </div>
      </div>
      <div className="flex gap-2 my-2 border-b w-full px-3">
        <div>
          <p className="text-sm font-normal">Total Answered: </p>
        </div>
        <div>
          <p className="text-blue-500">{data.totalAns}</p>
        </div>
      </div>
    </div>
  );
}
