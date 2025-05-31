export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  category?: 'main' | 'organization';
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}