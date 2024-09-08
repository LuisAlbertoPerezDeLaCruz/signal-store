import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  providers: [ProductsStateService],
})
export default class ProductListComponent {
  productState = inject(ProductsStateService);
  constructor() {}
}
