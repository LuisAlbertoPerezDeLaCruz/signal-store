import { Component, OnInit, inject } from '@angular/core';
import { SignalsService } from '../shared/signals.service';
import { ProductsService } from '../products/data-access/products.service';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  signals = inject(SignalsService);
  productsService = inject(ProductsService);
  myObservable = interval(1000);
  ngOnInit(): void {
    this.signals.count.update((value) => value + 1);
    console.log('Count:', this.signals.count());
    // this.myObservable.pipe().subscribe((res) => console.log(res));
  }
}
