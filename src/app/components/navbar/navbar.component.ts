import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  label: string;
  route?: string;
  href?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;

  navItems: NavItem[] = [
    { label: 'Home', route: '/' },
    { label: 'Servicios', route: '/servicios' },
    { label: 'Zentinel', href: '/zentinel' },
    { label: 'Proyectos', route: '/proyectos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' }
  ];

  ngOnInit() {
    // Cerrar menú al hacer scroll
    window.addEventListener('scroll', () => {
      this.isMenuOpen = false;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
