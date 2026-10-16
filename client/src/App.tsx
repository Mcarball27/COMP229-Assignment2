// -----------------------------------------------------------------------------
// App.tsx — main application layout and routes.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />

      {/* Main page content */}
      <main className="flex-1 w-full max-w-content mx-auto px-5 pt-10 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Unknown pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
