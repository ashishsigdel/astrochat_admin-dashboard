import React from "react";
import TicketUser from "./TicketUser";
import TicketUserDesc from "./TicketUserDesc";
import Message from "./Message";
import Count from "./Count";
import Question from "./Question";

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
    totalQues: 1,
    totalPQues: 0,
    totalFQues: 1,
    totalAns: 0,
  };

  return (
    <>
      <div className="p-3 bg-gray-100">
        <div className="mx-2">
          <h3 className="text-2xl font-semibold">Help Center</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="">
            <TicketUser data={user} />
            <TicketUserDesc data={user} />
            <Count data={user} />
          </div>
          <div className="">
            <Message data={user} />
            <Question data={user} />
          </div>
        </div>
      </div>
    </>
  );
}
