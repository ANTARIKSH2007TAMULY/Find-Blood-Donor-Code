import React, { useState } from "react";
import RequestCard from "./requestcard";

function Requests({ data, bloodGroups, requestStatus }) {
  // data → Full list of users/donors bloodGroups → Array of blood group requestStatus → Object that tracks which donors are requested (by user.id)

  // state for city seacrh
  const [citySearch, setCitySearch] = useState("");

  // stores datas of users with requestStatus =true
  const requestedUsers = data.filter((user) => requestStatus[user.id]);

  // Filtered users based on city search
  const filteredUsers = requestedUsers.filter((user) =>
    citySearch
      ? user.address.city.toLowerCase().includes(citySearch.toLowerCase())
      : true
  );

  return (
    <div className="px-6 py-12 min-h-screen flex flex-col items-center">

     
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
        Requested Donors
      </h2>

      {/* input tag to search donors based on cities  */}
      <input
        type="text"
        placeholder="Search by city"
        value={citySearch}
        onChange={(e) => setCitySearch(e.target.value)}
        className="mb-10 w-72 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />


      {/* conditional statments */}
      {filteredUsers.length === 0 ? (
      {/* Displays no Donors found if there are no users with those respective search letters */}
        <div className="flex flex-col items-center justify-center h-96">
          <p className="text-xl text-gray-500">
            No donors found
          </p>
          <p className="text-gray-400 mt-2 text-center">
            You can request for help from the <span className="font-semibold text-red-500">Donors</span> section.
          </p>
        </div>
      ) : (
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredUsers.map((user) => {
          // maps through every user in filtereedusers and add them to a card
            const userBloodGroup = bloodGroups[user.id % bloodGroups.length];
          // Assigning random blood groups
            const available = user.id % 2 === 0;
          // making user available only if its id is divisible by 2

            return (
              <RequestCard
                key={user.id}
                donor={{
                  ...user,
                  bloodGroup: userBloodGroup,
                  available: available,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Requests;
