import React from "react";

export default function TicketNotes() {
  return (
    <div className="m-2 h-screen bg-white border">
      <div className="flex w-full">
        <div className="flex-1 bg-orange-400 p-3 text-white text-sm">
          Pinned Message
        </div>
        <div className="flex-1 bg-gray-500 p-3 text-white text-sm">
          User Notes
        </div>
      </div>
    </div>
  );
}
