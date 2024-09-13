import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``,
})
export default class ProductDetailComponent implements OnInit {
  ngOnInit(): void {
    console.log('*************** entre aqui *****************');
  }
}
