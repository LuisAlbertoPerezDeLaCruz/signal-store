import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { Product } from '../../../shared/interfaces/product.interface';
import { firstValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsService],
})
export default class ProductListComponent implements OnInit {
  public products: Product[] = [];
  productService = inject(ProductsService);
  ngOnInit() {
    this.productService
      .getProducts()
      .pipe(
        map((item: Product) => {
          this.products.push(item);
        })
      )
      .subscribe(() => {
        console.log('products:', this.products);
      });
  }
}
