import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries/:countryName" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
