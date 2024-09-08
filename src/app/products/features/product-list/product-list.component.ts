import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [ProductCardComponent],
  providers: [ProductsStateService],
})
export default class ProductListComponent {
  productState = inject(ProductsStateService);
  constructor() {}
}
