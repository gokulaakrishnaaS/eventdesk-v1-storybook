import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  Calculator,
  Users,
  Network,
  Store,
  FileText,
  Receipt,
  X
} from 'lucide-react';
import { cn } from '../../utils/cn';
import type  { SidebarItem } from '../../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sidebarItems: SidebarItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'events', label: 'Events', icon: Calendar, path: '/events' },
    { id: 'budget-planner', label: 'Budget Planner', icon: Calculator, path: '/budget-planner' },
    { id: 'clients', label: 'Clients', icon: Users, path: '/clients' },
    { id: 'leads', label: 'Leads', icon: Network, path: '/leads' },
    { id: 'vendors', label: 'Vendors', icon: Store, path: '/vendors' },
    { id: 'invoice', label: 'Invoice', icon: FileText, path: '/invoice' },
    { id: 'bills', label: 'Bills', icon: Receipt, path: '/bills' },
  ];

  const shouldShowLabels = isHovered || isOpen;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-all duration-300 ease-in-out',
          // Mobile styles
          'md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          // Desktop styles
          shouldShowLabels ? 'w-64 md:w-64' : 'w-64 md:w-20' 
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="relative px-4 py-6 border-b border-gray-100">
            {/* Logo and brand - centered when expanded, logo only when collapsed */}
            <div className={cn(
              'flex items-center transition-all duration-200',
              shouldShowLabels ? 'justify-start space-x-3' : 'md:justify-center'
            )}>
              <img 
                src='logo_output.svg' 
                alt="EventDesk Logo"
                className="w-8 h-8 flex-shrink-0"
              />
              <span className={cn(
                'text-xl font-bold text-blue-600 transition-all duration-200',
                shouldShowLabels ? 'opacity-100' : 'md:opacity-0 md:w-0 md:overflow-hidden'
              )}>
                EventDesk
              </span>
            </div>
            
            {/* Mobile close button */}
            {/* <button
              onClick={onClose}
              className="absolute right-4 top-6 p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200 md:hidden"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button> */}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-3">
            <div className="space-y-2">
              {sidebarItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    // Close mobile sidebar when navigating
                    if (window.innerWidth < 768) {
                      onClose();
                    }
                  }}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center rounded-xl transition-all duration-200 group relative',
                      'hover:bg-gray-50',
                      // Conditional styling based on state
                      shouldShowLabels 
                        ? 'px-4 py-3 space-x-3 justify-start h-12' 
                        : 'md:px-0 md:py-3 md:justify-center md:w-full md:h-12 px-4 py-3 space-x-3 justify-start h-12',
                      // Active state styling
                      isActive
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'text-gray-700 hover:text-gray-900'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={cn(
                        'flex items-center justify-center flex-shrink-0',
                        shouldShowLabels ? '' : 'md:w-full'
                      )}>
                        <item.icon
                          className={cn(
                            'w-4 h-4 transition-colors duration-200',
                            isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'
                          )}
                        />
                      </div>
                      
                      <span
                        className={cn(
                          'font-medium transition-all duration-200 text-sm',
                          shouldShowLabels ? 'opacity-100' : 'md:opacity-0 md:w-0 md:overflow-hidden',
                          isActive ? 'text-white' : 'text-gray-800 group-hover:text-gray-900'
                        )}
                      >
                        {item.label}
                      </span>
                      
                      {/* Tooltip for collapsed state */}
                      {!shouldShowLabels && (
                        <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 hidden md:block shadow-lg">
                          {item.label}
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;