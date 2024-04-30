import { Link } from "react-router-dom";
import logo from "../../assets/longlogo.png";
import { FaUserCog } from "react-icons/fa";

export default function Header() {
  return (
    <div className="p-2 bg-white border-b px-7">
      <div className="flex justify-between items-center">
        <Link to="/moderator/dashboard">
          <img src={logo} alt="logo" className="h-14" />
        </Link>
        <div className="flex gap-4 items-center mr-5">
          <Link
            to="/moderator/ticket"
            className="px-4 py-1 border-red-500 border rounded-full hover:bg-red-500 transition duration-500"
          >
            <p className="text-red-500 font-bold hover:text-white transition duration-500">
              Open Ticket
            </p>
          </Link>
          <div className="text-gray-500 hover:text-black transition duration-500">
            <FaUserCog size={20} />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
