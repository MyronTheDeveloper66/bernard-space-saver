import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductResolver } from './services/product.resolver';
import { ProductsResolver } from './services/products.resolver';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { EmailFormComponent } from './components/pages/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', 
    component: HomeComponent,
    resolve: { products: ProductsResolver }
  },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'email-form', component: EmailFormComponent},
  {
    path: ':productName', 
    component: ProductsComponent, 
    resolve: { product: ProductResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
