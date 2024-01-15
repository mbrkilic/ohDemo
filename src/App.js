import './App.css';
import HomePage from './HomePage';
import Card from './components/Card';
import EndSec from './components/EndSec';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSec from './components/HeroSec'; 
import Contact from './components/Contact';
import ProfilePage from './components/ProfilePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
  <Header/>
  {/* <HomePage/> */}
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/profile" element={<ProfilePage/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
    {/* <HeroSec />
  <Card/>
  <EndSec/> */}
  <Footer/>
    </div>
  );
}

export default App;
