import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './products/product-card/product-card';
import { Product } from './models/product';

@Component({
  imports: [RouterOutlet, ProductCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  product: Product = {
    category: "",
    description: "",
    discountPercentage: 0,
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: "",
    title: "",
    brand: "",
  }
}
