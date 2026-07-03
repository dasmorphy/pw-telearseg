import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  
  scrollToExplore() {
    // Scroll to next section - en el futuro agregaremos más secciones
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }

  downloadBrochure() {
    console.log('Descargando brochure...');
    // Aquí iría la lógica para descargar el brochure
  }
}
