import { Component } from '@angular/core';

import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: ProductResolved = this.route.snapshot.data['resolvedData']
    if (resolvedData)
      this.product = resolvedData.product
    else
      console.error('Prodotto inesistente')
    this.onProductRetrieved()
  }

  onProductRetrieved(): void {
    this.pageTitle = this.product ? `Product Detail: ${this.product.productName}` : 'No product found';
  }
}
