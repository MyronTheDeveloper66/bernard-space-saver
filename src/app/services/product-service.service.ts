import { Injectable /*, Output, OnInit*/ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  filePath = '../../assets/products.json';

  constructor(private http: HttpClient) {}

  getInventory() {
    return this.http.get<Product[]>(this.filePath);
  }

  getSelectedProduct(short_name: string) {
    let allProducts = this.getInventory();
    return allProducts.pipe(
      map(products => products.filter(product => product["link_name"] == short_name))
    );
  }
}
