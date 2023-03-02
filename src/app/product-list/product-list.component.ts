import { Component, OnInit } from '@angular/core';

import { Product } from '../products';
import { ProductService } from '../product.service';
import { Fournisseur, fournisseurs } from '../fournisseur';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  fournisseurs : Fournisseur[] = fournisseurs;
  products : Product[]=[];

  constructor(private productService: ProductService) {}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  setFournisseur(fournisseurId : number) {
    this.productService.setFournisseur(fournisseurId);
    this.productService.getProducts().subscribe(data => this.products = data);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
