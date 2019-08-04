import { Component, OnInit } from '@angular/core';

import { Product } from '../../../../models/Product';
import { CustomerSelection } from '../../../../models/CustomerSelection';

import { ProductService } from '../../../../services/product-service.service';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  customerSelection: CustomerSelection = {
    productName: "",
    measurements: "",
    quantity: 0
  };

  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getInventory()
      .pipe(
        map(products => products)
      );
  }

  setSelectedProduct(productName: string) {
    this.selectedProduct$ = this.products$
      .pipe(
        map(products => products.filter(product => product.name == productName)),
        map(products => products[0])
      )
  }

}
