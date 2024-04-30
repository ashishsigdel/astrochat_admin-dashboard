import logo from "../../../assets/logo.png";

export default function Question({ data }) {
  const messages = [
    {
      sender: "user",
      receiver: "system",
      message: "hlo",
      date: "08 Apr, 2024 03:22 PM",
    },
    {
      sender: "user",
      receiver: "system",
      message: "maile hijo euta question sodeko thiye reply aayena",
      date: "08 Apr, 2024 03:22 PM",
    },
  ];
  return (
    <div className=" border m-2 border-gray-300 w-full rounded-lg flex flex-col gap-2 text-xl flex-wrap bg-white">
      <div className="m-3 px-3 font-semibold text-white bg-blue-600 rounded-full w-fit ">
        <h3>Questions</h3>
      </div>
      <div className="p-2 flex flex-col gap-5">
        {messages.map((message, index) => (
          <div key={index} className="flex flex-col gap-2 px-4">
            <div className="flex gap-2 items-center">
              <div>
                <img src={logo} className="w-10 h-10" alt="" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{data.name}</h3>
                <p className="text-xs text-gray-500">Raw - {message.date}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">{message.message}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 px-5">
        <div className="my-5">
          <div className="p-1 bg-blue-700 text-white w-fit rounded-md px-3">
            <p>{messages.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
