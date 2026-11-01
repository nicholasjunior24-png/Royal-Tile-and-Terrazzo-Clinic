
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contacts";
import Quote from "./pages/Quote";

import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import Quotations from "./components/admin/Quotations";

import AdminLayout from "./components/admin/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route
          path="/*"
          element={
            <div className="flex min-h-screen flex-col bg-stone-50">
              <Navbar />

              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/quote" element={<Quote />} />
                </Routes>
              </main>

              <Footer />
              <WhatsAppButton />
            </div>
          }
        />

        {/* Staff login */}
        <Route path="/staff/login" element={<Login />} />

        {/* Protected staff dashboard */}
        <Route
          path="/staff"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Navigate to="/staff/dashboard" replace />}
          />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="quotations" element={<Quotations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
