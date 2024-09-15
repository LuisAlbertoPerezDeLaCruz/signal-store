import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { StorageService } from './storage.service';
import { map } from 'rxjs';
import {  ProductItemCart } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
  
interface State {
  products: ProductItemCart[];
  loaded: boolean;
}
  
export class CartStateService {
  

  private storageService = inject(StorageService);

  private initialState: State = {
    products:[],
    loaded: false,
  };

  loadProducts$ = this.storageService.loadProducts()
    .pipe(map((products) =>({products,loaded:true})));

  public state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.loadProducts$,
    ]
  });
}


