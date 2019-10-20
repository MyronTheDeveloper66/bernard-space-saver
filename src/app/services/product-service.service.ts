import { Injectable /*, Output, OnInit*/ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

import { AlertService } from './alert.service';

import * as emailJs from 'emailjs-com';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  filePath = '../../assets/products.json';

  constructor(private http: HttpClient, private alertService: AlertService) {}

  getInventory() {
    return this.http.get<Product[]>(this.filePath);
  }

  getSelectedProduct(short_name: string) {
    const allProducts = this.getInventory();
    return allProducts.pipe(
      map(products => products.filter(product => product['link_name'] === short_name))
    );
  }

  sendEmail(emailObject: any) {
    emailJs.send('my_email_service', 'customer_quote', emailObject,  'user_nUvsa0T3X7KGWlMOOx7kE').then(res => {
      this.alertService.success(`${res.text}`);
      setTimeout(() => {
        this.alertService.clear();
      }, 5000);
    }, err => {
      this.alertService.error(`The email did not send because of ${err.text}`);
    });
  }
}
