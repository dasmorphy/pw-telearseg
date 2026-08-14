import { Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CamarasComponent } from './components/camaras/camaras.component';
import { ZentinelComponent } from './components/zentinel/zentinel.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {
        path: "",
        component: LandingComponent,
    },
    {
        path: "servicios",
        component: ServiciosComponent,
    },
    {
        path: "camaras",
        component: CamarasComponent,
    },
    {
        path: "zentinel",
        component: ZentinelComponent,
    },
    {
        path: "proyectos",
        component: ProjectsComponent,
    },
    {
        path: "nosotros",
        component: NosotrosComponent,
    },
    {
        path: "contacto",
        component: ContactoComponent,
    },
    {
        path: "**",
        redirectTo: "",
    },

];
