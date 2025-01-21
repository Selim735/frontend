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
  selector: 'app-admin',
  standalone: false,
  
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  isSidebarOpen = true;
  isUserMenuOpen = false;

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      isOpen: true,
      subItems: [
        { label: 'Overview', route: '/admin/dashboard' },
        { label: 'Analytics', route: '/admin/analytics' }
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
    {
      label: 'User Management',
      icon: 'fas fa-users',
      isOpen: false,
      subItems: [
        { label: 'Passengers', route: '/admin/passengers' },
        { label: 'Drivers', route: '/admin/drivers' }
      ]
    }
  ];

  userMenuItems: UserMenuItem[] = [
    { label: 'Profile', icon: 'fas fa-user', route: '/admin/profile' },
    { label: 'Settings', icon: 'fas fa-cog', route: '/admin/settings' },
    { label: 'Logout', icon: 'fas fa-sign-out-alt', route: '/logout' }
  ];

  stats: Stat[] = [
    {
      label: 'Total Revenue',
      value: '$54,234',
      icon: 'fas fa-dollar-sign',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      trend: 'up',
      percentage: 12.5
    },
    {
      label: 'Total Rides',
      value: '2,345',
      icon: 'fas fa-bus',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      trend: 'up',
      percentage: 8.2
    },
    {
      label: 'Active Buses',
      value: '45',
      icon: 'fas fa-shuttle-van',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      trend: 'down',
      percentage: 3.8
    },
    {
      label: 'Customer Rating',
      value: '4.8',
      icon: 'fas fa-star',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      trend: 'up',
      percentage: 4.1
    }
  ];

  recentActivities: Activity[] = [
    {
      title: 'New route added: Airport - Taksim',
      time: '2 hours ago',
      icon: 'fas fa-plus',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Bus maintenance completed #2234',
      time: '4 hours ago',
      icon: 'fas fa-wrench',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Customer complaint resolved #1123',
      time: '5 hours ago',
      icon: 'fas fa-check',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  tasks: Task[] = [
    {
      title: 'Review new driver applications',
      completed: false,
      priority: 'high'
    },
    {
      title: 'Update route scheduling',
      completed: true,
      priority: 'medium'
    },
    {
      title: 'Prepare monthly report',
      completed: false,
      priority: 'low'
    }
  ];

  constructor() {}

  ngOnInit() {}
}



