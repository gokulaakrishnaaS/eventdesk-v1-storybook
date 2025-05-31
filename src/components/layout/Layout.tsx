import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import type  { User } from '../../types';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock user data - replace with your auth context
  const user: User = {
    name: 'Gokul',
    email: 'gokul@herocore.io',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQH9amTXvJc5cg/profile-displayphoto-shrink_800_800/B56ZaazseQGUAc-/0/1746353966362?e=1753920000&v=beta&t=8xqH-2M9C6Z79CxZiWMP9elXreenyfI6Coz-GgRUI-Y'
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onToggleSidebar={toggleSidebar} user={user} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      <main className="pt-16 md:ml-20 transition-all duration-300">
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;