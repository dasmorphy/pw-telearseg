import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-camaras',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.scss']
})
export class CamarasComponent {
  // Total de diseños dentro del carrusel (img1, img2, img3)
  totalSlides = 3;

  currentSlide = 0;
  infraIndex = 0;

  // img3 · Reconocimiento Facial
  facialFeatures = [
    'Validamos quiénes ingresan en sus instalaciones.',
    'Facilitamos la generación de alertas en tiempo real.',
    'Realizamos seguimiento de movimientos en áreas críticas.'
  ];

  infraSlides = [
    [
      { title: 'Galeria Camaras 1', image: './assets/img/galeria_camaras_1.png' },
      { title: 'Galeria Camaras 2', image: './assets/img/galeria_camaras_2.png' },
      { title: 'Galeria Camaras 3', image: './assets/img/galeria_camaras_3.png' }
    ],
    [
      { title: 'Galeria Camaras 4', image: './assets/img/galeria_camaras_4.png' },
      { title: 'Galeria Camaras 5', image: './assets/img/galeria_camaras_5.png' },
    ]
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  nextInfraSlide() {
    this.infraIndex = (this.infraIndex + 1) % this.infraSlides.length;
  }

  prevInfraSlide() {
    this.infraIndex =
      (this.infraIndex - 1 + this.infraSlides.length) % this.infraSlides.length;
  }
}
