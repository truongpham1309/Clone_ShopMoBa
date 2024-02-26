import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../types';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  constructor(private productS: ProductsService, private toastr: ToastrService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productS.getAllProducts().subscribe(data => this.products = data);
  }

  clickRemove(id: string): void {
    if(!confirm('Are you sure you want to remove this product?')) return;

    this.productS.removeProducts(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
      this.toastr.success("Remove product successfully!", "");
    });
  }
}
