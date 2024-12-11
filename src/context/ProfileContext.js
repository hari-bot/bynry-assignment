import React, { createContext, useState, useContext } from "react";

const ProfileContext = createContext();

export const useProfiles = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  // Default profiles
  const defaultProfiles = [
    {
      id: 1,
      name: "Luffy",
      description: "Pirate Captain",
      image:
        "https://wallpapers.com/images/featured/luffy-pfp-2zmiybnpu693b69o.jpg",
      email: "luffy@mail.com",
      phone: "1234567890",
      interests: ["meat", "pirate king", "treasure"],
      address: { lat: 40.7128, lng: -74.006 },
    },
    {
      id: 2,
      name: "Zoro",
      description: "Swordsman",
      email: "zoro@mail.com",
      phone: "3333333333",
      interests: ["katana", "sake", "sanji"],
      image:
        "https://wallpapers.com/images/featured/roronoa-zoro-hfxnwuxph7uv5tsu.jpg",
      address: { lat: 34.0522, lng: -118.2437 },
    },
  ];

  // Initialize state with default profiles
  const [profiles, setProfiles] = useState(defaultProfiles);

  const addProfile = (profile) => {
    setProfiles((prevProfiles) => [
      ...prevProfiles,
      { ...profile, id: Date.now() },
    ]);
  };

  const deleteProfile = (id) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== id)
    );
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
