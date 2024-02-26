import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Product } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  private apiURL: string = 'https://65a90dd9219bfa3718684fb4.mockapi.io/products';

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

  getDetailsProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }

  createProduct(newProduct: Omit<Product, "id">) {
    this.http.post(this.apiURL, newProduct).subscribe(() => {
      this.toastr.success("Add products successfully!", "");
      this.router.navigateByUrl("/");
    })
  }

  updateProducts(newProduct: Product) {
    this.http.put(`${this.apiURL}/${newProduct.id}`, newProduct).subscribe(() => {
      this.toastr.success("Update products successfully!", "");
      this.router.navigateByUrl("/");
    })
  }

  removeProducts(id: string): Observable<Product>{
    return this.http.delete<Product>(`${this.apiURL}/${id}`);
  }
}
