import { Component } from '@angular/core';
import { Vehicule, VehiculeService } from '../services/vehicule.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isMobileMenuOpen = false;
  
  navItems: NavItem[] = [
    { label: 'Home', route: '/', icon: 'fas fa-home' },
    { label: 'Schedule', route: '/schedule', icon: 'fas fa-calendar-alt' },
    { label: 'Track Bus', route: '/track', icon: 'fas fa-bus' },
    { label: 'Stations', route: '/stations', icon: 'fas fa-map-marker-alt' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
