import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
  isOpen: boolean;
  subItems: SubMenuItem[];
}

interface SubMenuItem {
  label: string;
  route: string;
}

interface UserMenuItem {
  label: string;
  icon: string;
  route: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  trend: 'up' | 'down';
  percentage: number;
}

interface Activity {
  title: string;
  time: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

interface Task {
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}
@Component({
  selector: 'app-add',
  standalone: false,
  
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  isSidebarOpen = true;
  isUserMenuOpen = false;

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      isOpen: true,
      subItems: [
       
      ]
    },
    {
      label: 'Routes Management',
      icon: 'fas fa-route',
      isOpen: false,
      subItems: [
        { label: 'All Routes', route: '/admin/routes' },
        { label: 'Add Route', route: '/admin/routes/add' }
      ]
    },
    {
      label: 'Bus Management',
      icon: 'fas fa-bus',
      isOpen: false,
      subItems: [
        { label: 'Fleet Overview', route: '/admin/fleet' },
        { label: 'Maintenance', route: '/admin/maintenance' }
      ]
    },
  ];

  userMenuItems: UserMenuItem[] = [
    { label: 'Profile', icon: 'fas fa-user', route: '/admin/profile' },
    { label: 'Settings', icon: 'fas fa-cog', route: '/admin/settings' },
    { label: 'Logout', icon: 'fas fa-sign-out-alt', route: '/logout' }
  ];

  

  constructor() {}

  ngOnInit() {}
}

