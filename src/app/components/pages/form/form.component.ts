import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';

import { ProductDirective } from '../../../directives/product-directive.directive';
import { ProductFormComponent } from './product-form/product-form.component';

import { Email } from '../../../models/Email';
import { Product } from '../../../models/Product';
import { CustomerSelection } from '../../../models/CustomerSelection';

import { ProductService } from '../../../services/product-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-email-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @ViewChild(ProductDirective, {static: false}) productDirective: ProductDirective;
  @ViewChild(ProductFormComponent, {static: false}) productComponent: ProductFormComponent;

  emailForSend: Email = {
    firstName: "",
    lastName: "",
    email: "",
    products: [],
    comments: ""
  };

  productContainerRef: ViewContainerRef;
  productComponents: ComponentRef<ProductFormComponent>[] = [];

  customerSelections: CustomerSelection[] = [];

  products$: Observable<Product[]>;
  selectedProduct: Product;

  constructor(private productService: ProductService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.products$ = this.productService.getInventory()
      .pipe(
        map(products => products)
      )
    this.productContainerRef = this.productDirective.viewContainerRef;
  }

  onSubmit() {
    this.emailForSend.products.push(this.productComponent.customerSelection);
    if(this.productComponents.length > 0) {
      this.productComponents.forEach(productComponent => this.emailForSend.products.push(productComponent.instance["customerSelection"]));
    }
    
    this.productService.sendEmail({
      firstName: this.emailForSend.firstName,
      lastName: this.emailForSend.lastName,
      email: this.emailForSend.email,
      products: this.createProductTemplate(this.emailForSend),
      comments: this.emailForSend.comments
    });
  }


  newProduct() {
    if(this.productContainerRef.length < 5) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ProductFormComponent);
      let dynamicProductComponent = this.productContainerRef.createComponent(componentFactory);
      this.productComponents.push(dynamicProductComponent);
    }
  }

  removeProduct() {
    if(this.productContainerRef.length > 0) {
      this.productContainerRef.remove(this.productContainerRef.length - 1);
      this.productComponents.pop();
    }
  }

  createProductTemplate(message: Email) {
    let output= "";
    message.products.forEach(product => {
      output += `${product.productName}: Measurement at ${product.measurements}. ${product.quantity} requested. <br><br>`
    });
    return output;
  }
}
