import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../services/product-service.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product$ = this.route.data
        .pipe(
          map(data => data["product"][0])
        );
  }

  bannerStyling(product: Product) {
    return {
      "background-image": `url('assets/images/${product.banner_images[0]}`,
      "background-position": "center",
      "background-repeat": "no-repeat",
      "background-size": "cover",
    }
  }

}
