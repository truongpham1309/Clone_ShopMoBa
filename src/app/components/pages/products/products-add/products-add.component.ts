import { Component } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css'
})
export class ProductsAddComponent {
  constructor(private productS: ProductsService, private toastr: ToastrService){}

  newProducts = {
    name: "",
    price: 0,
    quality: 0,
    category: "",
    description: "",
    image: "",
  }

  validWarnings = {
    name: "",
    price: "",
    quality: "",
    category: "",
    description: "",
    image: "",
  }


  validForm = () => {
    let valid = false;
    if(this.newProducts.name.trim().length === 0) {
      valid = true;
      this.validWarnings.name = "Title is required!";
    }

    if(this.newProducts.price <= 0) {
      valid = true;
      this.validWarnings.price = "Price is required!";
    }

    if(this.newProducts.category.trim().length === 0) {
      valid = true;
      this.validWarnings.category = "Category is required!";
    }

    if(this.newProducts.image.trim().length === 0) {
      valid = true;
      this.validWarnings.image = "Image is required!";
    }

    return valid;
  }

  handleSubmit() {

    if(this.validForm()) return;
    this.productS.createProduct(this.newProducts);
  }
}
