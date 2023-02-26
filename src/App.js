import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-loading';
import './App.css';
import Landing from './pages/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
