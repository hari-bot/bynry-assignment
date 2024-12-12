import React, { useState } from "react";
import { useProfiles } from "../context/ProfileContext";

function AdminPanelPage() {
  const { profiles, addProfile, deleteProfile } = useProfiles();
  const [newProfile, setNewProfile] = useState({
    name: "",
    description: "",
    image: "",
    email: "",
    phone: "",
    interests: "",
    address: { lat: "", lng: "" },
  });

  // useEffect(() => {
  //   // Fetch profiles from API or load from local storage
  //   const fetchedProfiles = [
  //     { id: 1, name: 'John Doe', description: 'Software Engineer', image: 'https://randomuser.me/api/portraits/men/1.jpg', address: { lat: 40.7128, lng: -74.0060 } },
  //     { id: 2, name: 'Jane Smith', description: 'UX Designer', image: 'https://randomuser.me/api/portraits/women/2.jpg', address: { lat: 34.0522, lng: -118.2437 } },
  //     // Add more profiles here
  //   ];
  //   setProfiles(fetchedProfiles);
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "lat" || name === "lng") {
      setNewProfile((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else {
      setNewProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const interestsArray = newProfile.interests
      .split(",")
      .map((interest) => interest.trim());
    addProfile({ ...newProfile, interests: interestsArray });
    setNewProfile({
      name: "",
      description: "",
      image: "",
      email: "",
      phone: "",
      interests: "",
      address: { lat: "", lng: "" },
    });
  };

  const handleDelete = (id) => {
    deleteProfile(id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">
        Admin Panel
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="description"
            value={newProfile.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="image"
            value={newProfile.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            value={newProfile.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="tel"
            name="phone"
            value={newProfile.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="interests"
            value={newProfile.interests}
            onChange={handleInputChange}
            placeholder="Interests (comma-separated)"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              name="lat"
              value={newProfile.address.lat}
              onChange={handleInputChange}
              placeholder="Latitude"
              className="w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="lng"
              value={newProfile.address.lng}
              onChange={handleInputChange}
              placeholder="Longitude"
              className="w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Add Profile
          </button>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Profiles</h2>
        <div className="space-y-4">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <h3 className="font-semibold">{profile.name}</h3>
                <p className="text-gray-600">{profile.description}</p>
              </div>
              <button
                onClick={() => handleDelete(profile.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPanelPage;
