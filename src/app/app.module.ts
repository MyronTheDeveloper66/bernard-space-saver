import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CarouselComponent } from './components/pages/home/carousel/carousel.component';
import { ProductCardComponent } from './components/pages/home/product-card/product-card.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { EmailFormComponent } from './components/pages/form/form.component';
import { ProductFormComponent } from './components/pages/form/product-form/product-form.component';
import { ProductDirective } from './directives/product-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CarouselComponent,
    ProductCardComponent,
    EmailFormComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [ProductFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
