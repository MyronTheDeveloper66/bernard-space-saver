import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service.service';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:Product[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.route.snapshot.data["products"];
    console.log(this.products);
  }

}
