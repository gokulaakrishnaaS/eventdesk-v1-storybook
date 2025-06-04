import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TestPage from './pages/TestPage';
function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;