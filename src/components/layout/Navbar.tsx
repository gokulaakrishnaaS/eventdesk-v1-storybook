import React from 'react';
import { Menu } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';
import type  { User } from '../../types/index';

interface NavbarProps {
  onToggleSidebar: () => void;
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, user }) => {
  return (
    <nav className="fixed top-0 right-0 left-0 md:left-20 h-16 bg-white border-b border-gray-200 z-40 transition-all duration-300">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 md:hidden"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col">
               {/* <img src='logo_output.svg'/> */}
              </div>
              {/* <span className="text-xl font-semibold text-blue-600 hidden md:block">
                EventDesk
              </span> */}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ProfileDropdown user={user} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;