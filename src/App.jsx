import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
      <div className="app">
        <Header />
        <Navbar />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/proyek-event" element={<ProjectsEvents />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
