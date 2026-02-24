import React from "react";

export default function RequestCard({ donor }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-110 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">

      
      <div className="bg-red-600 text-white text-lg font-bold rounded-xl px-4 py-2 mb-4 text-center shadow-inner">
        {donor.name}
      </div>

      
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Username: </span>{donor.username}
        </p>
        <p>
          <span className="font-semibold">Email: </span>{donor.email}
        </p>
        <p>
          <span className="font-semibold">Address: </span>
          {donor.address.city}, {donor.address.street}, {donor.address.suite}
        </p>
        <p>
          <span className="font-semibold">Phone: </span>{donor.phone}
        </p>
      </div>

      {/* Below code is Just to show the Bloodgroup and since it shows requests only so all the donors are available so it always shows avaialabe */}
      <div className="flex justify-between items-center mt-4">
        <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 font-semibold">
          {donor.bloodGroup}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${donor.available
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-500"
            }`}
        >
          {donor.available ? "Available ✅" : "Not Available ❌"}
        </span>
      </div>

      {/*  it is just showing the Request Help button because donor.avaialble is always true cz these cards are only used when donor.available is true */}
      {donor.available && (
        <div className="mt-4 text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition duration-200">
            Request Help
          </button>
        </div>
      )}
    </div>
  );
}
