import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-loading';
import './App.css';
import AboutUs from './pages/about-us';
import Landing from './pages/landing';
import ProductPreview from './pages/product-preview';
import Products from './pages/products';
import ScrollToTop from './utils/scroll-to-top';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product-preview" element={<ProductPreview />} loading />
        <Route path="/about-us" element={<AboutUs />} loading />
        <Route path="/products" element={<Products />} loading />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
