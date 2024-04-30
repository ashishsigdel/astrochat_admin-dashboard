import { FaEdit } from "react-icons/fa";

export default function TicketUserDesc({ data }) {
  return (
    <div className="m-2 mt-4 border border-gray-300 border-t-2 border-t-blue-500 rounded-lg flex flex-col text-xl flex-wrap bg-white w-full px-5">
      <div className="flex justify-between py-2 my-2 border-b">
        <p className="font-semibold text-sm">Joined:</p>
        <p className="text-blue-500 hover:text-blue-700 text-sm">
          {data.Joined}
        </p>
      </div>
      <div className="flex justify-between py-2 my-2 border-b">
        <p className="font-semibold text-sm">Gender:</p>
        <p className="text-blue-500 hover:text-blue-700 text-sm">
          {data.Gender}
        </p>
      </div>
      <div className="flex justify-between py-2 my-2 border-b">
        <p className="font-semibold text-sm">Date Of Birth:</p>
        <p className="text-blue-500 hover:text-blue-700 text-sm">
          {data.DateOfBirth}
        </p>
      </div>
      <div className="flex justify-between py-2 my-2 border-b">
        <p className="font-semibold text-sm">Time Of Birth:</p>
        <p className="text-blue-500 hover:text-blue-700 text-sm">
          {data.TimeOfBirth}
        </p>
      </div>
      <div className="flex justify-between py-2 my-2 border-b">
        <p className="font-semibold text-sm">Country:</p>
        <p className="text-blue-500 hover:text-blue-700 text-sm">
          {data.Country}
        </p>
      </div>
      <div className="flex justify-between py-2 my-2 border-b">
        <p className="font-semibold text-sm">State:</p>
        <p className="text-blue-500 hover:text-blue-700 text-sm">
          {data.State}
        </p>
      </div>
      <div className="flex justify-between py-2 my-2 border-b">
        <p className="font-semibold text-sm">City:</p>
        <p className="text-blue-500 hover:text-blue-700 text-sm">{data.City}</p>
      </div>
      <form className="flex justify-between py-2 my-2 border-b border-gray-300 items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <select
            id="zodiac"
            name="zodiac"
            className="p-2 rounded-md bg-transparent active:border-none border border-gray-200 w-full"
          >
            <option value="Aries">Select Zodiac</option>
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Aquarius">Aquarius</option>
            <option value="Pisces">Pisces</option>
          </select>
        </div>
        <button className="p-2 border text-blue-500 hover:bg-blue-700 hover:text-white transition duration-500">
          <FaEdit size={20} />
        </button>
      </form>
    </div>
  );
}
