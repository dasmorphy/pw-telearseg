import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  label: string;
  route?: string;
  href?: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = 2026;

  empresaLinks: FooterLink[] = [
    { label: 'Sobre Nosotros', route: '/nosotros' },
    { label: 'Trabaja con Nosotros', href: '#trabaja' }
  ];

  contacto = {
    telefono: '+593 95 978 8833',
    email: 'info@telearseg.net'
  };
}
