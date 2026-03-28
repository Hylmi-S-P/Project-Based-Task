import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HylmiProfile from './profile/HylmiProfile';
import DaryaProfile from './profile/DaryaProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
        
        <nav className="mb-8 space-x-4">
          <Link to="/" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Home</Link>
          <Link to="/hylmi-s-p" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Profil Hylmi</Link>
          <Link to="/darya" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Profil Darya</Link>
        </nav>


        <Routes>
          <Route path="/" element={
            <div className="text-center">
              <h1 className="text-2xl font-bold">Selamat Datang di Project Kelompok</h1>
              <p>Pilih profil anggota di atas.</p>
            </div>
          } />

          <Route path="/hylmi-s-p" element={<HylmiProfile />} />
          <Route path="/darya" element={<DaryaProfile />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;