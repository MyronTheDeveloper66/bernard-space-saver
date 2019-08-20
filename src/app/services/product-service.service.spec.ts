import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



import { ProductService } from './product-service.service';
import { PRODUCTS } from '../data/mock-data';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductService', () => {
  let productService: ProductService,
      httpTestingController: HttpTestingController;
  
  const filePath = '../../assets/products.json';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ProductService]
    });

    productService = TestBed.get(ProductService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve all products', () => {
    productService.getInventory().subscribe(products => {
      expect(products).toBeTruthy('No products returned');
      expect(products.length).toBe(2, 'Incorrect number of products');

      const product = products.find(product => product.link_name == 'hanging');

      expect(product.name).toBe('Hanging Rack');
    });

    const req = httpTestingController.expectOne(filePath);

    expect(req.request.method).toEqual('GET');

    req.flush(Object.values(PRODUCTS));
  });

});
