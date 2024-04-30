import logo from "../../assets/logo.png";

export default function TicketUser({ data }) {
  return (
    <div className="pt-5 pb-10 m-2 border border-gray-300 border-t-2 border-t-blue-500 rounded-lg flex flex-col text-xl flex-wrap bg-white w-full justify-center items-center">
      <img src={logo} alt="User profile picture" className="w-24" />
      <h3 className="font-semibold ">{data.name}</h3>
      <div className="flex gap-1">
        <p className="text-gray-500 text-sm">{`Zodiac: ${data.Zodiac}`}</p>
        <p className="text-gray-500 text-sm">|</p>
        <p className="text-gray-500 text-sm">{`Age: ${data.Age}`}</p>
      </div>
      <p className="text-gray-500 text-sm">{data.email}</p>
    </div>
  );
}
