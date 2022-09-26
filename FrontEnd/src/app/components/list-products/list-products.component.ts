import { Component, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts: Product[] = [
    { id: 1, name: 'coca-cola', description: 'Bebida con azuar', price: 10, valor: 200 },
    { id: 2, name: 'Pata', description: ' azuar', price: 30, valor: 500 },
    { id: 3, name: 'Gansito', description: 'CChocolate', price: 40, valor: 700 },
  ]





  constructor() { }

  ngOnInit(): void {
  }

}
