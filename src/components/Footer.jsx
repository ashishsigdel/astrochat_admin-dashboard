import React from "react";

export default function Footer() {
  return (
    <div className="p-3 bg-white border-t px-7 flex gap-1 justify-center items-center">
      <p className="font-bold text-gray-500">
        Copyright &copy; 2014-2021{" "}
        <span className="text-blue-500 font-bold">SoftUp</span>.
      </p>
      <p className="text-gray-400">All rights reserved.</p>
    </div>
  );
}
