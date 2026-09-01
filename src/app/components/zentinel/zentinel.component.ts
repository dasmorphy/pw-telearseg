import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Component } from "@angular/core";


@Component({
  selector: 'app-zentinel',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './zentinel.component.html',
  styleUrls: ['./zentinel.component.scss']
})

export class ZentinelComponent {

  activosSlides: string[] = [
    './assets/img/zentinel_activos_1.png',
    './assets/img/zentinel_activos_2.png',
    './assets/img/zentinel_activos_3.png',
    './assets/img/zentinel_activos_4.png',
  ];

  activosIndex = 0;

  prevActivos(): void {
    this.activosIndex =
      (this.activosIndex - 1 + this.activosSlides.length) % this.activosSlides.length;
  }

  nextActivos(): void {
    this.activosIndex = (this.activosIndex + 1) % this.activosSlides.length;
  }

  goToActivos(index: number): void {
    this.activosIndex = index;
  }

  openExternal(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

}