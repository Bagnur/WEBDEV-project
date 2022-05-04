

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { ProductService } from '../products_service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = []

  constructor(private service: ProductService, private route: ActivatedRoute) { }

  share() {
    window.alert('The product has been shared!');
  }
  removeProduct(product: Product): void {
    delete this.products[this.products.indexOf(product)];
    }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const getIdFromRoute = Number(routeParams.get('categoryId'));
    this.service.get(getIdFromRoute).subscribe((res) => this.products = res)
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/