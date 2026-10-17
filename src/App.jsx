import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProjectsEvents from "./pages/ProjectsEvents";
import EventDetail from "./pages/EventDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/proyek-event" element={<ProjectsEvents />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
