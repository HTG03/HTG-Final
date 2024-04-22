import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import Home from './components/Home';
import Forget from './components/Forget';
import CllgSignUp from './components/CllgSignUp';
import CllgLogin from './components/CllgLogin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import AnnualFun from './components/AnnualFun';
import FresherParty from './components/FresherParty';
import Farewell from './components/Farewell';
import Corporate from './components/Corporate';
import ArtAndFun from './components/ArtAndFun';
import Seminar from './components/Seminar';
import ContactUs from './components/ContactUs';
import Exclusive from './components/Exclusive';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/CllgLogin" element={<CllgLogin/>} />
      <Route exact path="/sign" element={<SignUp/>} />
      <Route exact path="/CllgSign" element={<CllgSignUp/>} />
      <Route exact path="/forget" element={<Forget/>} />
      <Route exact path="/about" element={<AboutUs/>} />
      <Route exact path="/annualFunction" element={<AnnualFun/>} />
      <Route exact path="/fresherParty" element={<FresherParty/>} />
      <Route exact path="/farewell" element={<Farewell/>} />
      <Route exact path="/corporate" element={<Corporate/>} />
      <Route exact path="/art&fun" element={<ArtAndFun/>} />
      <Route exact path="/seminar" element={<Seminar/>} />
      <Route exact path="/contact" element={<ContactUs/>} />
      <Route exact path="/exclusive" element={<Exclusive/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;