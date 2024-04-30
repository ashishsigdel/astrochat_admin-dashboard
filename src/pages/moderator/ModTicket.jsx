import React from "react";
import TicketUser from "../../components/moderator/TicketUser";
import TicketUserDesc from "../../components/moderator/TicketUserDesc";
import Message from "../../components/moderator/Message";
import TicketNotes from "../../components/moderator/TicketNotes";
import Header from "../../components/moderator/ModHeader";

export default function Ticket() {
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
      <Header />
      <div className="p-3 bg-gray-100">
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
