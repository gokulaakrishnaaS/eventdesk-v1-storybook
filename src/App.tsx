import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TestPage from './pages/TestPage';
import DaisyTestPage from './pages/DaisyTestPages';
function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />}>
        </Route>
        <Route path="/Daisy" element={<DaisyTestPage />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;