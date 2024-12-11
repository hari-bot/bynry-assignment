import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ profile, onSummary }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
        <p className="text-gray-600 mt-2">{profile.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => onSummary(profile)}
            className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300"
          >
            Show on Map
          </button>
          <Link
            to={`/profile/${profile.id}`}
            className="text-indigo-500 hover:text-indigo-600 transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
