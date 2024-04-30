import { MdEmail, MdLock } from "react-icons/md";

export default function LogIn() {
  const data = {
    name: "Ashish Sigdel",
  };
  return (
    <div className=" flex w-full h-screen justify-center items-center align-items-center  gap-2 text-xl flex-wrap bg-gray-100">
      <div className=" border bg-white border-gray-300 border-t-2 border-t-blue-500 rounded-lg w-fit h-fit">
        <div className="flex justify-center py-3 my-2 border-b">
          <h1 className="text-3xl font-semibold">
            Astro<span className="text-3xl font-bold">CHATS</span>
          </h1>
        </div>
        <form className="flex flex-col gap-4 p-5">
          <div className="flex items-center border rounded-md">
            <input
              type="text"
              placeholder="Username"
              className="p-2 border-r rounded-l-md focus:outline-none"
            />
            <div
              className="p-2 px-3￼
"
            >
              <MdEmail className="text-gray-600" />
            </div>
          </div>
          <div className="flex items-center border rounded-md">
            <input
              type="password"
              placeholder="Password"
              className="p-2 border-r rounded-l-md focus:outline-none"
            />
            <div className="p-2 px-3">
              <MdLock className="text-gray-600" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center ">
              <input type="checkbox" />
              <span className="font-semibold">Remember Me</span>
            </div>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Sign In
            </button>
          </div>
          <div>
            <p className="text-blue-600 hover:underline cursor-pointer">
              I forgot my password
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
