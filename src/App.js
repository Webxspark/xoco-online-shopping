import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-loading';
import './App.css';
import AboutUs from './pages/about-us';
import BlogPage from './pages/blog';
import ContactUs from './pages/contact-us';
import FaqPage from './pages/faq';
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
        <Route path="/blog" element={<BlogPage />} loading />
        <Route path="/contact-us" element={<ContactUs />} loading />
        <Route path="/faq" element={<FaqPage />} loading />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
