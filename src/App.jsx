import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Ticket from "./pages/moderator/ModTicket";
import Dashboard from "./pages/admin/Dashboard";
import ModDashboard from "./pages/moderator/Dashboard";
import LogIn from "./pages/LogIn";
import Navigateto from "./utlis/Navigate";
import CustomerQustion from "./pages/admin/CustomerQustion";
import HelpCenter from "./pages/admin/HelpCenter";
import Astrologer from "./pages/admin/Astrologer";
import Analyst from "./pages/admin/Analyst";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/moderator/dashboard" element={<ModDashboard />} />
        <Route path="/moderator/ticket" element={<Ticket />} />
        <Route path="/admin/:pathname" element={<Dashboard />} />
        <Route path="/admin/customers/:id" element={<CustomerQustion />} />
        <Route path="/admin/help-center/:id" element={<HelpCenter />} />
        <Route path="/admin/:pathname/:element" element={<Dashboard />} />
        <Route path="/admin/question/astrologer/:id" element={<Astrologer />} />
        <Route path="/admin/question/analyst/:id" element={<Analyst />} />
        <Route path="/admin/login" element={<LogIn />} />
        <Route path="/*" element={<Navigateto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
