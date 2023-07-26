import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm?: NgForm;

  errorMessage = '';
  product: Product = {
    id: null,
    productName: '',
    productCode: '',
    category: '',
    releaseDate: '',
    price: 0,
    description: '',
    starRating: 0,
    imageUrl: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.data.subscribe(data => {
      if(this.productForm)
        this.productForm.reset()
      this.product = data['resolvedData'].product
    })
  }
}
