import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  images = [
    '/assets/img/project_1.png',
    '/assets/img/project_2.png',
    '/assets/img/project_3.png',
    '/assets/img/project_4.png',
  ];

  currentIndex = 0;
  exitIndex = -1;
  private interval: any;

  constructor(private router: Router) {}

  @ViewChild('homeVideo')
  homeVideo!: ElementRef<HTMLVideoElement>;
  

  ngOnInit(): void {
    this.startCarousel();
  }

  ngAfterViewInit(): void {
    const video = this.homeVideo.nativeElement;
    video.muted = true;
    video.play().catch(console.error);
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  navigateRoute(route: string) {
    this.router.navigate([route]);

  }

  private startCarousel(): void {
    this.interval = setInterval(() => this.next(), 4000);
  }

  private stopCarousel(): void {
    clearInterval(this.interval);
  }

  next(): void {
    this.exitIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    // Limpia el exitIndex después de la animación
    setTimeout(() => this.exitIndex = -1, 800);
  }

  goTo(index: number): void {
    if (index === this.currentIndex) return;
    this.stopCarousel();
    this.exitIndex = this.currentIndex;
    this.currentIndex = index;
    setTimeout(() => this.exitIndex = -1, 800);
    this.startCarousel(); // reinicia el timer
  }
  
  scrollToExplore() {
    // Scroll to next section - en el futuro agregaremos más secciones
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }

  downloadBrochure() {
    console.log('Descargando brochure...');
    // Aquí iría la lógica para descargar el brochure
  }

}
