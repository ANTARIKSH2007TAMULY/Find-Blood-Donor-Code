export default function DonorCard({ donor, onRequest, isRequested }) {


  const availabilityStyle = donor.available
    ? "bg-green-100 text-green-700"
    : "bg-gray-200 text-gray-500";


  const buttonStyle = isRequested
  ? "bg-green-500 cursor-not-allowed"
  : "bg-red-500 hover:bg-red-600";

  return (
    <div
      className="
        bg-white 
        rounded-xl 
        shadow-lg 
        p-6 
        w-120
        transform 
        transition-all 
        duration-300 
        hover:scale-105 
        hover:shadow-2xl
      "
    >

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {donor.name}
      </h2>


      <p className="mb-3">
        <span className="font-semibold text-gray-700">Blood Group: </span>
        <span className="px-3 py-1 bg-red-100 text-red-600 font-medium rounded-full">
          {donor.bloodGroup}
        </span>
      </p>


      <p className="mb-3">
        <span className="font-semibold text-gray-700">City: </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
          {donor.address.city}-{donor.address.street}
        </span>
      </p>


      <p className="mb-4">
        <span className="font-semibold text-gray-700">Availability: </span>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${availabilityStyle}`}
        >
          {donor.available ? "Available ✅" : "Not Available ❌"}
        </span>
      </p>


      {donor.available && (
        <button
          onClick={() => onRequest(donor.id)}
          
          className={`w-full py-2 rounded-md text-white font-semibold transition duration-200 ${buttonStyle}`}
        >
          {isRequested ? "Unsend Request ❌" : "Request Help"}
        </button>
      )}
    </div>
  );
}
