import { Routes } from '@angular/router';
import { PaymentComponent } from './domains/shared/payment/payment.component'
import { PageNotFoundComponent } from './domains/shared/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component'
import { LayoutComponent } from './domains/shared/layout/layout.component';
import { InfoEnvioComponent } from './domains/shared/info-envio/info-envio.component';

 

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./domains/pages/home/home.component').then(m=> m.HomeComponent) 
            },
            {
                path: 'tienda',
                loadComponent: () => import('./domains/pages/tienda/tienda.component').then(m=> m.TiendaComponent) 
            },
            {
                path: 'categorias-ideas-para-regalar',
                loadComponent: () => import('./domains/pages/categorias/categorias.component').then(m=> m.CategoriasComponent)
            },
            {
                path: 'motivos',
                loadComponent: () => import('./domains/pages/motivos/motivos.component').then(m=> m.MotivosComponent) 
            },
            {
                path: 'regalo-ideal-para-hombres',
                loadComponent: () => import('./domains/pages/hombre/hombre.component').then(m=> m.HombreComponent) 
            },
            {
                path: 'regalo-ideal-para-mujeres',
                loadComponent: () => import('./domains/pages/mujer/mujer.component').then(m=> m.MujerComponent) 
            },
            {
                path: 'nino',
                loadComponent: () => import('./domains/pages/nino/nino.component').then(m=> m.NinoComponent) 
            },
            {
                path: 'recien-nacido',
                loadComponent: () => import('./domains/pages/recien-nacido/recien-nacido.component').then(m=> m.RecienNacidoComponent) 
            },
            {
                path: 'art01',
                loadComponent: () => import('./domains/shared/sections/blog/art01/art01.component').then(m=> m.Art01Component) 
            },
            {
                path: 'art02',
                loadComponent: () => import('./domains/shared/sections/blog/art02/art02.component').then(m=> m.Art02Component) 
            },
            {
                path: 'art03',
                loadComponent: () => import('./domains/shared/sections/blog/art03/art03.component').then(m=> m.Art03Component) 
            },
            {
                path: 'art04',
                loadComponent: () => import('./domains/shared/sections/blog/art04/art04.component').then(m=> m.Art04Component) 
            },
            {
                path: 'product/:id',
                component: ProductDetailComponent
            }
        ]
    },  
    {
        path: 'payment',
        component: PaymentComponent
    }, 
    {
        path: 'info-envio',
        component: InfoEnvioComponent
    }, 
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
