import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { Observable, noop } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getInventory()
      .pipe(
        map(products => products)
      );
  }

}
