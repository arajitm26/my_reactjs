// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import NoPage from './pages/NoPage.js';
import Layout from './pages/Layout.js';
import Login from './pages/user/Login.js';
import Register from './pages/user/Register.js';
import AdminLogin from './pages/admin/Login.js';
import Dashboard from './pages/admin/Dashboard.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Header from './pages/Header.js';
import Footer from './pages/Footer.js';




import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact phone={8240816462} email={"smartjeet39@gmail.com"} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="admin">
          <Route path="" element={<AdminLogin />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
