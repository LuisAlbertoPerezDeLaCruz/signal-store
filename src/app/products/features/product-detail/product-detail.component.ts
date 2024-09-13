import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [],
})
export default class ProductDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  productId = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id')!;
      console.log('product id: ', this.productId);
    });
  }
}
