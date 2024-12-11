import React from "react";
import { useParams, Link } from "react-router-dom";
import Map from "./Map";
import { useProfiles } from "../context/ProfileContext";

function ProfileDetails() {
  const { profiles } = useProfiles();
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Profile not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-indigo-600 hover:text-indigo-800 transition duration-300 mb-6 inline-block"
      >
        ← Back to all profiles
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h1 className="text-3xl font-bold mb-4">{profile.name}</h1>
            <p className="text-gray-600 mb-4">{profile.description}</p>
            <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2">
                Contact Information
              </h2>
              {profile.email && (
                <p className="mb-1">
                  <span className="font-semibold">Email:</span> {profile.email}
                </p>
              )}
              {profile.phone && (
                <p className="mb-1">
                  <span className="font-semibold">Phone:</span> {profile.phone}
                </p>
              )}
              {profile.address && (
                <p className="mb-1">
                  <span className="font-semibold">Address:</span>
                  {` ${profile.address.lat}, ${profile.address.lng}`}
                </p>
              )}
            </div>
            {profile.interests && profile.interests.length > 0 && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="md:w-1/2">
            <div className="h-96 md:h-full rounded-lg overflow-hidden border border-gray-300">
              <Map selectedProfile={profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
