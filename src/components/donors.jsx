import React, { useState } from "react";
import DonorCard from "./cards";

function Donors({ data, bloodGroups, requestStatus, handleRequest }) {
  // data-> Array of all donors object
  // bloodGroups-> List of bloodGroups
  // requestStatus -> Object tracking which donors are requeste
  // handlerequest -> Function to handle request button clicks

  
  const [selectedGroup, setSelectedGroup] = useState("");
 // selectedGroup → Filters donors by blood group
  const [citySearch, setCitySearch] = useState("");
 // citySearch → Filters donors by city name
  const [sortAvailability, setSortAvailability] = useState("");
  
  // sortavailability stores the option chosen from >
  //         <option value="">Sort by availability</option>
  //         <option value="availableFirst">Available First</option>
  //         <option value="notAvailableFirst">Not Available First</option>
 // user is made avaialable to donate if its id is divisible by 2

  
  // Filters donors by blood group & city
  const filteredData = data.filter((user) => {
    const userBloodGroup = bloodGroups[user.id % bloodGroups.length];
    // assignes bloodgroups
    const matchesGroup = selectedGroup ? userBloodGroup === selectedGroup : true;
    const matchesCity = citySearch
      ? user.address.city.toLowerCase().includes(citySearch.toLowerCase())
      : true;
    return matchesGroup && matchesCity;
    // adds the user to filtereddata if both matchescity and macthesgroup are true
  });

  // // Sort filtered donors by availability had used spread operator to store eveerything inside filetered data into an array
  // We use b - a to sort in descending order (available first since true = 1) and a - b to sort in ascending order (not available first since false = 0).
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortAvailability === "availableFirst") {
      return (b.id % 2 === 0) - (a.id % 2 === 0);
      // user.id % 2 === 0
      // Even ID → true → Available → becomes 1
      //   Odd ID → false → Not Available → becomes 0  
    } else if (sortAvailability === "notAvailableFirst") {
      return (a.id % 2 === 0) - (b.id % 2 === 0);
    }
    return 0;
  });


  
  return (
    <div className="px-6 py-8">

      <div className="flex justify-center items-center gap-4 mb-8 bg-white shadow-md rounded-xl p-4 flex-wrap">
       
        <h2 className="text-2xl font-bold text-red-600">
          All Donors
        </h2>

        {/* filter blood group */}
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select Blood Group</option>
          {bloodGroups.map((group) => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>

        {/* City Search */}
        <input
          type="text"
          placeholder="Search by city"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* set sortavailability based on the value selected */}
        <select
          value={sortAvailability}
          onChange={(e) => setSortAvailability(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Sort by availability</option>
          <option value="availableFirst">Available First</option>
          <option value="notAvailableFirst">Not Available First</option>
        </select>
      </div>

      {/* display donor cards for all donors */}
      {sortedData.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-gray-500 text-xl">No donors found</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 justify-center">
          {sortedData.map((user) => {
            // assign bloodgroup
            const userBloodGroup = bloodGroups[user.id % bloodGroups.length];
          // user is made avaialable to donate if its id is divisible by 2
            const available = user.id % 2 === 0;

            return (
              <DonorCard
                key={user.id}
                donor={{
                  ...user,
                  bloodGroup: userBloodGroup,
                  available: available,
                }}
                onRequest={handleRequest}
                isRequested={requestStatus[user.id]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Donors;
