import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-edit.component.html',
  styleUrl: './products-edit.component.css'
})
export class ProductsEditComponent implements OnInit {
  constructor(private productS: ProductsService, private toastr: ToastrService, private route: ActivatedRoute) { }
  newProducts = {
    id: "",
    name: "",
    price: 0,
    quality: 0,
    category: "",
    description: "",
    image: "",
  }
  idPr: string = "";
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.idPr = String(param.get('id')));

    this.productS.getDetailsProduct(this.idPr).subscribe(data => this.newProducts = data);
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
    if (this.newProducts.name.trim().length === 0) {
      valid = true;
      this.validWarnings.name = "Title is required!";
    }

    if (this.newProducts.price <= 0) {
      valid = true;
      this.validWarnings.price = "Price is required!";
    }

    if (this.newProducts.category.trim().length === 0) {
      valid = true;
      this.validWarnings.category = "Category is required!";
    }

    if (this.newProducts.image.trim().length === 0) {
      valid = true;
      this.validWarnings.image = "Image is required!";
    }

    return valid;
  }

  handleSubmit() {

    if (this.validForm()) return;
    this.productS.updateProducts(this.newProducts);
  }
}
