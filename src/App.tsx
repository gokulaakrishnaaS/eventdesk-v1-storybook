import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import BudgetPlanner from './pages/BudgetPlanner';
import Clients from './pages/Clients';
import Leads from './pages/Leads';
import Vendors from './pages/Vendors';
import Invoice from './pages/Invoice';
import Bills from './pages/Bills';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="events" element={<Events />} />
          <Route path="budget-planner" element={<BudgetPlanner />} />
          <Route path="clients" element={<Clients />} />
          <Route path="leads" element={<Leads />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="bills" element={<Bills />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;