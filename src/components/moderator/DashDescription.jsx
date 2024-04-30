import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

export default function DashDescription() {
  const data = {
    paid_quiry: 4,
    free_query: 20,
  };

  return (
    <div className="p-5 border border-gray-300 border-t-2 border-t-red-500 rounded-lg flex flex-col gap-3 text-xl flex-wrap bg-white w-full">
      <div className="flex gap-4">
        <div className="flex gap-3 bg-gray-200 p-3 rounded-lg">
          <p className="text-sm">
            No. of new <span className="text-green-600">paid</span> queries
            received in last 24 hours
          </p>
          <div className="flex gap-2 items-center text-red-500">
            <p>{data.paid_quiry}</p>
            <GoTriangleDown size={20} />
          </div>
        </div>
        <div className="flex gap-3 bg-gray-200 p-3 rounded-lg">
          <p className="text-sm">
            No. of new <span className="text-red-500">free</span> queries
            received in last 24 hours
          </p>
          <div className="flex gap-2 items-center text-green-500">
            <p>{data.free_query}</p>
            <GoTriangleUp size={20} />
          </div>
        </div>
      </div>
      <div className="my-3 flex flex-col gap-3">
        <div>
          <div className="flex justify-between">
            <p className="text-xs">No. of queries answered this week</p>
            <p className="text-xs">4/5</p>
          </div>
          <div className="w-full bg-gray-200 h-2">
            <div className="w-[80%] bg-blue-500 h-2"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-xs">No. of paid queries answered this week</p>
            <p className="text-xs">0/0</p>
          </div>
          <div className="w-full bg-gray-200 h-2">
            <div className="w-[0%] bg-blue-500 h-2"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-xs">No. of free queries answered this week</p>
            <p className="text-xs">1/1</p>
          </div>
          <div className="w-full bg-gray-200 h-2">
            <div className="w-[100%] bg-blue-500 h-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
