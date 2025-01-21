// routes.component.ts
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

// Define a Route interface for the table items
interface RouteItem {
  id: number;
  name: string;
  distance: string;
  duration: string;
}

@Component({
  selector: 'app-routes',
  // This is NOT a standalone component; it will be declared in an NgModule
  standalone: false,
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  // Sidebar and User Menu Toggles
  isSidebarOpen = true;
  isUserMenuOpen = false;

  // Modal control for updating a route
  isUpdateModalOpen = false;
  selectedRoute: RouteItem | null = null;

  // Sidebar menu items
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      isOpen: true,
      subItems: []
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
    }
  ];

  // User menu items
  userMenuItems: UserMenuItem[] = [
    { label: 'Profile', icon: 'fas fa-user', route: '/admin/profile' },
    { label: 'Settings', icon: 'fas fa-cog', route: '/admin/settings' },
    { label: 'Logout', icon: 'fas fa-sign-out-alt', route: '/logout' }
  ];

  // Example stats for dashboard
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

  // Example recent activities
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

  // Example tasks
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

  // Example "Routes" data for the table
  routes: RouteItem[] = [
    { id: 1, name: 'Route A', distance: '150 km', duration: '2h 30m' },
    { id: 2, name: 'Route B', distance: '200 km', duration: '3h' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Lifecycle hook - runs once after component is initialized
  }

  // Methods to manipulate the "routes" data
  addRoute(): void {
    const newRoute: RouteItem = {
      id: this.routes.length + 1,
      name: `Route ${String.fromCharCode(65 + this.routes.length)}`, // 'Route A', 'Route B', etc.
      distance: '100 km',
      duration: '2h'
    };
    this.routes.push(newRoute);
  }

  /**
   * Old method for updating route data. (Renamed to avoid confusion)
   * We will call this inside saveUpdatedRoute() once the user confirms the modal.
   */
  updateRouteData(routeId: number): void {
    const route = this.routes.find(r => r.id === routeId);
    if (route) {
      route.distance = 'Updated Distance';
      route.duration = 'Updated Duration';
    }
  }

  /**
   * Open the modal with the route data to edit.
   */
  openUpdateModal(route: RouteItem): void {
    // Create a copy of the route so we don't mutate data until "saveUpdatedRoute"
    this.selectedRoute = { ...route };
    this.isUpdateModalOpen = true;
  }

  /**
   * Close the update modal without saving changes.
   */
  closeUpdateModal(): void {
    this.isUpdateModalOpen = false;
    this.selectedRoute = null;
  }

  /**
   * Save the updated route data back to our array, then close the modal.
   */
  saveUpdatedRoute(): void {
    if (!this.selectedRoute) {
      return;
    }

    // Find the index of the route we're editing
    const index = this.routes.findIndex(r => r.id === this.selectedRoute!.id);
    if (index !== -1) {
      // Update the route in the array with the new data
      this.routes[index] = { ...this.selectedRoute };
    }

    // Close the modal
    this.closeUpdateModal();
  }

  deleteRoute(routeId: number): void {
    this.routes = this.routes.filter(route => route.id !== routeId);
  }
}
