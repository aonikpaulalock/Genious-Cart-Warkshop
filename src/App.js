import { Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Seared/Header/Header';
import Footer from './Pages/Seared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/Seared/NotFound/NotFound';
import Signup from './Pages/Login/Signup/Signup';
import Checkout from './Checkout/Checkout';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service/:id" element={<ServiceDetails/>}></Route>
        <Route path="/checkout" element={
          <RequiredAuth>
            <Checkout/>
          </RequiredAuth>
        }></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
