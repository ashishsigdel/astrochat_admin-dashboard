import React from "react";
import TicketUser from "./TicketUser";
import TicketUserDesc from "./TicketUserDesc";
import Message from "./Message";
import TicketNotes from "./TicketNotes";

export default function QuestionPage() {
  const user = {
    name: "Rohini Prasad Adhikari",
    email: "handsomeboyz_achyut@yahoo.com",
    Joined: "2 weeks ago",
    Gender: "Male",
    Age: 23,
    Zodiac: "Leo",
    DateOfBirth: "1991-04-01",
    TimeOfBirth: "11:03 PM",
    Country: "Nepal",
    State: "Bagmati",
    City: "Banepa",
  };

  return (
    <>
      <div className="p-3">
        <div className="mx-2 mb-5">
          <h3 className="text-2xl font-semibold">Question</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-1/4">
            <TicketUser data={user} />
            <TicketUserDesc data={user} />
          </div>
          <div className="w-full md:w-2/4">
            <Message data={user} />
          </div>
          <div className="w-full md:w-1/4">
            <TicketNotes />
          </div>
        </div>
      </div>
    </>
  );
}
