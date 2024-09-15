import { effect, inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { StorageService } from './storage.service';
import { map } from 'rxjs';
import { ProductItemCart } from '../interfaces/product.interface';

interface State {
  products: ProductItemCart[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CartStateService {
  constructor() {
    effect(() => {
      if (this.state.loaded() === true) {
        console.log(this.state.products());
      }
    });
  }

  private storageService = inject(StorageService);

  private initialState: State = {
    products: [],
    loaded: false,
  };

  loadProducts$ = this.storageService
    .loadProducts()
    .pipe(map((products) => ({ products, loaded: true })));

  public state = signalSlice({
    initialState: this.initialState,
    sources: [this.loadProducts$],
  });
}
