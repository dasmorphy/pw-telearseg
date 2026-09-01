import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
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
    { label: 'Nosotros', route: '/nosotros' },
    { label: 'Contacto', href: '/contacto' }
  ];

  constructor(
  private router: Router
) {}

  ngOnInit() {
    // Cerrar menú al hacer scroll
    window.addEventListener('scroll', () => {
      this.isMenuOpen = false;
    });
  }


  closeMenu() {
    this.isMenuOpen = false;
  }

  navigateTo(route: string): void {
  this.closeMenu();

  if (this.router.url === route) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    return;
  }

  this.router.navigate([route]).then(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
}
