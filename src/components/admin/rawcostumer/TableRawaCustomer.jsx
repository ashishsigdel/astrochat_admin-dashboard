export function TableRawCustomer() {
  const data = [
    {
      sn: 1,
      email: "user1@example.com",
      isEmailVerified: true,
      isEnabled: false,
      device: "Android",
      createdAt: "2024-04-25T12:00:00Z",
    },
    {
      sn: 2,
      email: "user2@example.com",
      isEmailVerified: false,
      isEnabled: true,
      device: "iOS",
      createdAt: "2024-04-25T12:05:00Z",
    },
    {
      sn: 3,
      email: "user3@example.com",
      isEmailVerified: true,
      isEnabled: true,
      device: "Android",
      createdAt: "2024-04-25T12:10:00Z",
    },
    {
      sn: 4,
      email: "user4@example.com",
      isEmailVerified: false,
      isEnabled: false,
      device: "iOS",
      createdAt: "2024-04-25T12:15:00Z",
    },
    {
      sn: 5,
      email: "user5@example.com",
      isEmailVerified: true,
      isEnabled: true,
      device: "Android",
      createdAt: "2024-04-25T12:20:00Z",
    },
    {
      sn: 6,
      email: "user6@example.com",
      isEmailVerified: false,
      isEnabled: false,
      device: "iOS",
      createdAt: "2024-04-25T12:25:00Z",
    },
    {
      sn: 7,
      email: "user7@example.com",
      isEmailVerified: true,
      isEnabled: true,
      device: "Android",
      createdAt: "2024-04-25T12:30:00Z",
    },
    {
      sn: 8,
      email: "user8@example.com",
      isEmailVerified: false,
      isEnabled: false,
      device: "iOS",
      createdAt: "2024-04-25T12:35:00Z",
    },
    {
      sn: 9,
      email: "user9@example.com",
      isEmailVerified: true,
      isEnabled: true,
      device: "Android",
      createdAt: "2024-04-25T12:40:00Z",
    },
    {
      sn: 10,
      email: "user10@example.com",
      isEmailVerified: false,
      isEnabled: false,
      device: "iOS",
      createdAt: "2024-04-25T12:45:00Z",
    },
  ];

  return (
    <div className=" relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.N
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Is Email Verified
            </th>
            <th scope="col" className="px-6 py-3">
              Is Enabled
            </th>
            <th scope="col" className="px-6 py-3">
              Device
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
          </tr>
        </thead>
        {data.map((user) => (
          <tbody key={user.id}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.sn}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                {user.isEmailVerified === true ? "Verified" : "Not Verified"}
              </td>
              <td className="px-6 py-4">
                {user.isEnabled === true ? "Enabled" : "Not Enabled"}
              </td>
              <td className="px-6 py-4">
                <div>
                  <p className="text-black font-semibold text-sm">
                    Device Type:{" "}
                    <span className="font-normal">{user.device}</span>
                  </p>
                </div>
              </td>
              <td className="px-6 py-4">{user.createdAt}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="py-2 my-3 items-center border-y flex justify-between">
        <p>{`Showing 1 to 1 of ${data.length} entries`}</p>
        <div className="flex items-center">
          <p className="p-2 border">Previous</p>
          <p className="p-2 border px-4 bg-blue-600">1</p>
          <p className="p-2 border">Next</p>
        </div>
      </div>
    </div>
  );
}
