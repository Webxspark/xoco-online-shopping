import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-loading';
import './App.css';
import Landing from './pages/landing';
import ProductPreview from './pages/product-preview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product-preview" element={<ProductPreview />} loading />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
