import { Component, OnInit, inject } from '@angular/core';
import { SignalsService } from '../shared/signals.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  signals = inject(SignalsService);
  ngOnInit(): void {
    this.signals.count.update((value) => value + 1);
    console.log('Count:', this.signals.count());
  }
}
