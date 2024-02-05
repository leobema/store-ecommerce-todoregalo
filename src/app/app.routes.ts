import { Routes } from '@angular/router';
import { HomeComponent } from './domains/pages/home/home.component'
import { TiendaComponent } from './domains/pages/tienda/tienda.component';
import { CategoriasComponent } from './domains/pages/categorias/categorias.component'
import { MotivosComponent } from './domains/pages/motivos/motivos.component'; 
import { HombreComponent } from './domains/pages/hombre/hombre.component';
import { MujerComponent } from './domains/pages/mujer/mujer.component';
import { NinoComponent } from './domains/pages/nino/nino.component';
import { RecienNacidoComponent } from './domains/pages/recien-nacido/recien-nacido.component';
import { PageNotFoundComponent } from './domains/shared/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component'
import { LayoutComponent } from './domains/shared/layout/layout.component';
 

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'tienda',
                component: TiendaComponent
            },
            {
                path: 'categorias',
                component: CategoriasComponent
            },
            {
                path: 'motivos',
                component: MotivosComponent
            },
            {
                path: 'hombre',
                component: HombreComponent
            },
            {
                path: 'mujer',
                component: MujerComponent
            },
            {
                path: 'nino',
                component: NinoComponent
            },
            {
                path: 'recien-nacido',
                component: RecienNacidoComponent
            },
            {
                path: 'product/:id',
                component: ProductDetailComponent
            }
        ]
    },   
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
