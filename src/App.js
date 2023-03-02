import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-loading';
import './App.css';
import Landing from './pages/landing';
import ProductPreview from './pages/product-preview';
import ScrollToTop from './utils/scroll-to-top';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product-preview" element={<ProductPreview />} loading />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
