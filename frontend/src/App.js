import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ShopCategory } from './Pages/ShopCategory';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Shop } from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import { useEffect, useState } from 'react';

// const hideFooterRoutes = ["/login"]; // use path, not component name

function App() {
  // const location = useLocation(); // ✅ correct way to access location
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme"; 
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  },[darkMode]);
  return (
    <div>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode}/>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer/>

      {/* ✅ Footer hidden only on login */}
      {/* {!hideFooterRoutes.includes(location.pathname) && <Footer />} */}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
