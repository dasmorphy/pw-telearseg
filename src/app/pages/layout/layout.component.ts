import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    AvatarModule,
    InputTextModule,
    RouterOutlet
],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent {


  constructor() {}

}
