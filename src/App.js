import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home'; 
import About from './component/About';
import Crop from './component/Crop';
import Herb from './component/Herb';
import Insec from './component/Insec';
import BuyProductForm from './pages/BuyProductForm';
import Contactus from './component/Contactus';
import Fung from './component/Fung' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  
  return (
    <Router>
      <div>
     
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Home" element={<Home />} />
         
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Fung" element={<Fung />} />
          <Route path="/Herb" element={<Herb />} />
          <Route path="/Insec" element={<Insec />} />
          <Route path="/BuyProductForm" element={<BuyProductForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Crop" element={<Crop />} />
          {/* Add more routes as needed */}
        </Routes>
       
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
