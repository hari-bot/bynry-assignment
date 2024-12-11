import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import AdminPanel from "./components/AdminPanel";
import ProfileDetails from "./components/ProfileDetails";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  return (
    <ProfileProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
          <Header />
          <Routes>
            <Route path="/" element={<ProfileList />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;
