import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { ProductService } from '../products_service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product: Product | undefined
  constructor(
    private service: ProductService, 
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  like(product: Product): void {
    product.likes++;
    }
  
    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('productId'));
      this.service.getproduct(productIdFromRoute).subscribe((res) => this.product = res)
    }

}
