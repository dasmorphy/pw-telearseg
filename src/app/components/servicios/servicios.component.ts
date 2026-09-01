import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {
  // img1 - "Conoce nuestras soluciones en"
  solutions = [
    { label: 'Video Vigilancia:<br />Monitoreo CCTV', target: 'video-vigilancia' },
    { label: 'Torres y<br />Estructuras', target: 'torres' },
    { label: 'Control de<br />Accesos', target: 'control-accesos' },
    { label: 'Infraestructura TI<br />y Comunicaciones', target: 'infraestructura' },
    { label: 'Sistemas<br />Fotovoltaicos', target: 'fotovoltaicos' },
    { label: 'Ver<br />Cámaras', route: '/camaras' }
  ];

  // img3 - "¿Qué monitoreamos?"
  monitoring = [
    {
      title: 'Seguridad',
      description:
        'Identificamos intrusiones, cruces de línea, merodeos, aglomeraciones y otros comportamientos sospechosos.',
      image: './assets/img/seguridad_servicio.png',
      badge: ''
    },
    {
      title: 'Procesos',
      description:
        'Monitoreamos que el personal cumpla con sus labores respetando las normas impuestas por su empresa.',
      image: './assets/img/procesos_servicios.png',
      badge: ''
    },
    {
      title: 'Gestión y Registro',
      description:
        'Supervisamos el ingreso de visitantes manteniendo trazabilidad, orden y control dentro de su empresa.',
      image: './assets/img/gestion_registro.png',
      badge: ''
    },
    {
      title: 'Rastreo GPS de Vehículos',
      description:
        'Nuestro sistema permite el monitoreo en tiempo real de la ubicación, recorridos y detenciones, fortaleciendo el control operativo.',
      image: './assets/img/gps_vehiculos.png',
      badge: ''
    },
    {
      title: 'Rastreo GPS para VIPs',
      description:
        'Monitoreamos en tiempo real a gerentes, administradores y personal clave de su operación, reforzando su seguridad.',
      image: './assets/img/gps_vips.png',
      badge: ''
    },
    {
      title: 'Dashboard de Incidentes',
      description:
        'Entregamos un dashboard consolidado con las incidencias registradas, permitiendo un análisis oportuno para la toma de decisiones.',
      image: './assets/img/dashboard.png',
      badge: ''
    }
  ];

  // img5 - "Control de Accesos"
  accessControl = [
    {
      title: 'Torniquetes',
      description:
        'Se integran con sistemas de control de acceso y monitoreo, fortaleciendo la seguridad y aportando mayor organización en las instalaciones.',
      image: './assets/img/torniquetes.png'
    },
    {
      title: 'Biométricos',
      description:
        'Fortalecemos el control de accesos en sus instalaciones a través de la identificación de huellas dactilares y reconocimiento facial.',
      image: './assets/img/biometricos.png'
    },
    {
      title: 'Cercos Eléctricos',
      description:
        'Estos sistemas inteligentes integran protección perimetral, incorporando sensores, alertas en tiempo real y conexión a sistemas de monitoreo.',
      image: './assets/img/cercos_electricos.png'
    }
  ];

  // img6 - "Infraestructura TI y Comunicaciones" (carrusel)
  infraSlides = [
    [
      { title: 'Cableado<br />estructurado', image: './assets/img/cableado_estructurado.png' },
      { title: 'Administración<br />de red', image: './assets/img/administracion_red.png' },
      { title: 'Internet Fibra<br />óptica', image: './assets/img/internet_fibra.png' }
    ],
    [
      { title: 'Internet<br />satelital', image: './assets/img/internet_satelital.png' },
      { title: 'Ciberseguridad', image: './assets/img/ciberseguridad.png' },
      { title: 'Gestión<br />de redes', image: './assets/img/gestion_redes.png' }
    ]
  ];

  infraIndex = 0;

  // img7 - "Sistemas Fotovoltaicos"
  photovoltaics = [
    { title: 'Casetas', image: './assets/img/casetas.png' },
    { title: 'Paneles Solares', image: './assets/img/paneles_solares_2.png' },
    { title: 'Inversores', image: './assets/img/inversores.png' },
    { title: 'Unidades de<br />Vigilancia Móvil', image: './assets/img/uvm.png' }
  ];

  constructor(private router: Router) {}

  nextInfraSlide() {
    this.infraIndex = (this.infraIndex + 1) % this.infraSlides.length;
  }

  prevInfraSlide() {
    this.infraIndex =
      (this.infraIndex - 1 + this.infraSlides.length) % this.infraSlides.length;
  }

  downloadBrochure() {
    console.log('Descargando brochure...');
    // Aquí iría la lógica para descargar el brochure
  }

  navigateRoutes(route: string) {
    this.router.navigate([route]);

  }

  navigateRoute(solution: any) {
    if (solution.route) {
      this.router.navigate([solution.route]);
      return;
    }

    const element = document.getElementById(solution.target);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
