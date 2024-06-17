import{BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Service } from "./pages/Service";
import { Logout } from "./pages/Logout";
import { Navbar } from  "./components/Navbar";
import{MessFeeDeposit} from "./pages/MessFeeDeposit";
import{HostelFeeDeposit} from "./pages/HostelFeeDeposit";
import{MessTimeTable} from "./pages/MessTimeTable";
import{Notices} from "./pages/Notices";
import{Announcements} from "./pages/Announcements";
import {Error} from "./pages/Error";
import {Footer} from "./components/Footer/Footer"
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminUSers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUpdate } from "./pages/Admin-Update";
import  ParticlesComponent from './components/ParticlesComponent.jsx';

const MainContent = () => {
  const location = useLocation();
  const showParticles = location.pathname === "/login" || location.pathname === "/register" ||location.pathname==="/contact";

  return (
    <>
      {showParticles && <ParticlesComponent />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/messfee" element={<MessFeeDeposit />} />
        <Route path="/hostelfee" element={<HostelFeeDeposit/>} />
        <Route path="/messtimetable" element={<MessTimeTable />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUSers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
      </Routes>
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainContent />
      <Footer />
    </BrowserRouter>
  );
};

export default App; 