import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

interface ClientLogo {
    name: string;
    image: string;
}

interface LogoGroup {
    id: string;
    title: string;
    subtitle: string;
    /** Cantidad de logos visibles cuando el grupo está colapsado */
    preview: number;
    logos: ClientLogo[];
}

interface SectorFlag {
    name: string;
    /** Recorte horizontal dentro del sprite banderas.png (5 banderas de 260px) */
    position: string;
}

interface Sector {
    id: string;
    /** Etiqueta de la tarjeta en "Nuestros Clientes" (img1) */
    tab: string;
    kicker?: string;
    title: string;
    description: string;
    image?: string;
    flags?: SectorFlag[];
    /** Fondo con el mapa punteado (img11) */
    mapBackground?: boolean;
    brochure?: string;
    groups: LogoGroup[];
}

const CAMARONERAS = "./assets/img/projects/Clientes_Camaroneras";
const EMPACADORAS = "./assets/img/projects/Clientes_Empacadoras";
const HACIENDAS = "./assets/img/projects/Clientes_Haciendas";
const INDUSTRIAS = "./assets/img/projects/Clientes_Industrias";
const INTERNACIONALES = "./assets/img/projects/Clientes_Internacionales";
const URBANIZACIONES = "./assets/img/projects/Clientes_Urbanizaciones";

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    activeSector = 'camaronero';

    /** Cada grupo arranca desplegado, tal como se ve en los diseños */
    expandedGroups: Record<string, boolean> = {};

    sectors: Sector[] = [
        // ===== img2 · img3 · img4 =====
        {
            id: 'camaronero',
            tab: 'Sector Camaronero',
            kicker: 'Sector',
            title: 'CAMARONERO',
            description:
                'Trayectoria comprobada en el sector camaronero, con monitoreo del proceso productivo: desde el cultivo hasta el empaque.',
            image: './assets/img/projects/sector_camaronero.png',
            // TODO: reemplazar por el PDF real del brochure del sector camaronero
            brochure: '',
            groups: [
                {
                    id: 'camaroneras',
                    title: 'Camaroneras',
                    subtitle: 'que confían en nosotros',
                    preview: 10,
                    logos: [
                        { name: 'Lanec', image: `${CAMARONERAS}/logo_lanec.png` },
                        { name: 'Santa Priscila', image: `${CAMARONERAS}/logo_santapriscila.png` },
                        { name: 'Omarsa', image: `${CAMARONERAS}/logo_omarsa.png` },
                        { name: 'Expalsa', image: `${CAMARONERAS}/logo_expalsa.png` },
                        { name: 'Songa', image: `${CAMARONERAS}/logo_songa.png` },
                        { name: 'Diosmar Grupo', image: `${CAMARONERAS}/logo_diosmar.png` },
                        { name: 'Grupo Vasco', image: `${CAMARONERAS}/logo_grupovasco.png` },
                        { name: 'Grupo Bravito', image: `${CAMARONERAS}/logo_grupobravito.png` },
                        { name: 'Lukmar', image: `${CAMARONERAS}/logo_lukmar.png` },
                        { name: 'Almar Grupo Acuícola', image: `${CAMARONERAS}/logo_grupoalmar.png` },
                        { name: 'Empagran', image: `${CAMARONERAS}/logo_empagran.png` },
                        { name: 'Camaguyca', image: `${CAMARONERAS}/logo_camaguyca.png` },
                        { name: 'Alfaguyca', image: `${CAMARONERAS}/logo_alfaguyca.png` },
                        { name: 'ABA Balanceado', image: `${CAMARONERAS}/logo_ababalanceado.png` },
                        { name: 'Obrythor', image: `${CAMARONERAS}/logo_obrythor.png` },
                        { name: 'Grupo Espinoza Redrován', image: `${CAMARONERAS}/logo_grupoespinozaredrovan.png` },
                        { name: 'Aqualinter', image: `${CAMARONERAS}/logo_aqualinter.png` },
                        { name: 'Jhikatal S.A.', image: `${CAMARONERAS}/logo_jhikatal.png` },
                        { name: 'Quirola', image: `${CAMARONERAS}/logo_quirola.png` },
                        { name: 'Aguamarina', image: `${CAMARONERAS}/logo_aguamarina.png` },
                        { name: 'Pesquesol', image: `${CAMARONERAS}/logo_pesquesol.png` },
                        { name: 'Inlafa S.A.', image: `${CAMARONERAS}/logo_inlafa.png` },
                        { name: 'Virazón S.A.', image: `${CAMARONERAS}/logo_virazon.png` },
                        { name: 'Corporación Aray Aray Bioaray S.A.', image: `${CAMARONERAS}/logo_corporacionarayaray.png` },
                        { name: 'Langostinera Macori', image: `${CAMARONERAS}/logo_langostineramacori.png` },
                        { name: 'Pescasol', image: `${CAMARONERAS}/logo_pescasol.png` },
                        { name: 'Culsaro', image: `${CAMARONERAS}/logo_culsaro.png` },
                        { name: 'Avica Company', image: `${CAMARONERAS}/logo_avicacompany.png` },
                        { name: 'Promarisco', image: `${CAMARONERAS}/logo_promarisco.png` },
                        { name: 'Grupo Camaronero Santos', image: `${CAMARONERAS}/logo_gruposantos.png` }
                    ]
                },
                {
                    id: 'empacadoras',
                    title: 'Empacadoras',
                    subtitle: 'que confían en nosotros',
                    preview: 0,
                    logos: [
                        { name: 'Omarsa', image: `${CAMARONERAS}/logo_omarsa.png` },
                        { name: 'Ocean Product', image: `${EMPACADORAS}/logo_oceanproduct.png` },
                        { name: 'Qualitygood', image: `${EMPACADORAS}/logo_qualitygood.png` },
                        { name: 'Camarexpo', image: `${EMPACADORAS}/logo_camarexpo.png` },
                        { name: 'Empagran', image: `${CAMARONERAS}/logo_empagran.png` }
                    ]
                }
            ]
        },

        // ===== img5 =====
        {
            id: 'bananero',
            tab: 'Sector Bananero',
            kicker: 'Sector',
            title: 'BANANERO',
            description:
                'Llevamos la seguridad electrónica más allá de la vigilancia: aplicamos monitoreo inteligente y control de procesos en el sector bananero, optimizando cada etapa productiva con tecnología de precisión, trazabilidad y respuesta en tiempo real.',
            image: './assets/img/projects/sector_bananero.png',
            // TODO: reemplazar por el PDF real del brochure del sector bananero
            brochure: '',
            groups: []
        },

        // ===== img6 · img7 =====
        {
            id: 'industrial',
            tab: 'Sector Industrial',
            kicker: 'Sector',
            title: 'INDUSTRIAL',
            description:
                'Potenciamos la seguridad electrónica mediante monitoreo inteligente y control de procesos, optimizando la operación en tiempo real. Hoy, ampliamos nuestra presencia para llevar eficiencia, precisión y confianza a más industrias.',
            image: './assets/img/projects/sector_industrial.png',
            // TODO: reemplazar por el PDF real del brochure del sector industrial
            brochure: '',
            groups: [
                {
                    id: 'manufactureras',
                    title: 'Empresas manufactureras',
                    subtitle: 'que confían en nosotros',
                    preview: 10,
                    logos: [
                        { name: 'Holcim', image: `${INDUSTRIAS}/logo_holcim.png` },
                        { name: 'BioMar', image: `${INDUSTRIAS}/logo_biomar.png` },
                        { name: 'Impala', image: `${INDUSTRIAS}/logo_impala.png` },
                        { name: 'Indurama', image: `${INDUSTRIAS}/logo_indurama.png` },
                        { name: 'Cargill', image: `${INDUSTRIAS}/logo_cargill.png` },
                        { name: 'Kimberly-Clark', image: `${INDUSTRIAS}/logo_kimberlyclark.png` },
                        { name: 'PICA', image: `${INDUSTRIAS}/logo_pica.png` },
                        { name: 'Molinos Champion', image: `${INDUSTRIAS}/logo_molinoschampion.png` },
                        { name: 'AQ1 Systems', image: `${INDUSTRIAS}/logo_aq1.png` },
                        { name: 'Vitabal S.A.', image: `${INDUSTRIAS}/logo_vitabal.png` },
                        { name: 'Durán Cocoa', image: `${INDUSTRIAS}/logo_durancocoa.png` },
                        { name: 'Arrocera La Palma', image: `${INDUSTRIAS}/logo_arroceralapalma.png` },
                        { name: 'Cofinacocoa', image: `${INDUSTRIAS}/logo_cofinacocoa.png` },
                        { name: 'Canal de Guayaquil CGU S.A.', image: `${INDUSTRIAS}/logo_canaldegye.png` }
                    ]
                }
            ]
        },

        // ===== img8 · img9 =====
        {
            id: 'haciendas',
            tab: 'Haciendas',
            title: 'HACIENDAS',
            description:
                'Impulsamos la productividad en haciendas con monitoreo inteligente de la producción, asegurando control de calidad, supervisión de procesos y decisiones en tiempo real para una operación más eficiente y rentable.',
            image: './assets/img/projects/haciendas.png',
            // TODO: reemplazar por el PDF real del brochure de haciendas
            brochure: '',
            groups: [
                {
                    id: 'haciendas-clientes',
                    title: 'Haciendas',
                    subtitle: 'que confían en nosotros',
                    preview: 0,
                    logos: [
                        { name: 'Procariomart S.A. Hacienda Kakao', image: `${HACIENDAS}/logo_procariomart.png` },
                        { name: 'Ariegra S.A.', image: `${HACIENDAS}/logo_ariegra.png` },
                        { name: 'Agrisam', image: `${HACIENDAS}/logo_agrisam.png` },
                        { name: 'Rinursa', image: `${HACIENDAS}/logo_rinursa.png` }
                    ]
                }
            ]
        },

        // ===== img10 =====
        {
            id: 'urbanizaciones',
            tab: 'Urbanizaciones',
            title: 'URBANIZACIONES',
            description:
                'Elevamos la seguridad en urbanizaciones mediante control de accesos inteligente, tecnología ANPR para identificación vehicular y protocolos de respuesta en tiempo real, garantizando una gestión ágil, segura y confiable para residentes y visitantes.',
            image: './assets/img/projects/urbanizaciones.png',
            // TODO: reemplazar por el PDF real del brochure de urbanizaciones
            brochure: '',
            groups: [
                {
                    id: 'hoteles-residencias-pymes',
                    title: 'Hoteles, Residencias y PYMES',
                    subtitle: 'que confían en nosotros',
                    preview: 0,
                    logos: [
                        { name: 'Colinas de los Ceibos', image: `${URBANIZACIONES}/logo_colinasceibos.png` },
                        { name: 'Wyndham', image: `${URBANIZACIONES}/logo_wyndham.png` },
                        { name: 'Bureau Veritas', image: `${URBANIZACIONES}/logo_bureauveritas.png` },
                        { name: 'Seviad', image: `${URBANIZACIONES}/logo_seviad.png` }
                    ]
                }
            ]
        },

        // ===== img11 =====
        {
            id: 'internacionales',
            tab: 'Internacionales',
            kicker: 'Clientes',
            title: 'INTERNACIONALES',
            description:
                'Contamos con presencia en distintos países del continente, llevando nuestra experiencia y tecnología a nivel internacional.',
            mapBackground: true,
            flags: [
                { name: 'Perú', position: '24.92%' },
                { name: 'Panamá', position: '49.92%' },
                { name: 'Honduras', position: '75%' },
                { name: 'Nicaragua', position: '100%' }
            ],
            groups: [
                {
                    id: 'empresas-internacionales',
                    title: 'Empresas',
                    subtitle: 'que confían en nosotros',
                    preview: 0,
                    logos: [
                        { name: 'Panama Seafood Group', image: `${INTERNACIONALES}/logo_panamaseafood.png` },
                        { name: 'Cacesa', image: `${INTERNACIONALES}/logo_cacesa.png` },
                        { name: 'Tumbes PA', image: `${INTERNACIONALES}/logo_tumbespa.png` },
                        { name: 'Marpesca Seafood', image: `${INTERNACIONALES}/logo_marpesca.png` },
                        { name: 'Transporte Dimass S.A.', image: `${INTERNACIONALES}/logo_transportedimass.png` }
                    ]
                }
            ]
        }
    ];

    constructor() {
        for (const sector of this.sectors) {
            for (const group of sector.groups) {
                this.expandedGroups[group.id] = true;
            }
        }
    }

    navigateRoute(solution: any) {
        const element = document.getElementById(solution.target);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    selectSector(id: string) {
        this.activeSector = id;
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    isExpanded(groupId: string) {
        return this.expandedGroups[groupId];
    }

    toggleGroup(groupId: string) {
        this.expandedGroups[groupId] = !this.expandedGroups[groupId];
    }

    visibleLogos(group: LogoGroup): ClientLogo[] {
        return this.isExpanded(group.id) ? group.logos : group.logos.slice(0, group.preview);
    }

    downloadBrochure(sector: Sector) {
        // TODO: apuntar sector.brochure al PDF correspondiente para habilitar la descarga
        console.log('Descargando brochure...', sector.id, sector.brochure);
    }
}
