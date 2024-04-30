import React from "react";
import NameCard from "../../components/moderator/NameCard";
import DashUser from "../../components/moderator/DashUser";
import DashQuestion from "../../components/moderator/DashQuestion";
import DashDescription from "../../components/moderator/DashDescription";
import Header from "../../components/moderator/ModHeader";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="py-[3rem] px-[2rem] md:px-[7rem] flex flex-col sm:flex-row gap-3 bg-gray-100">
        <div className="w-full sm:w-1/3 flex flex-col gap-5">
          <NameCard />
          <DashQuestion />
        </div>
        <div className="w-full sm:w-2/3 flex flex-col gap-5">
          <DashUser />
          <DashDescription />
        </div>
      </div>
    </>
  );
}
