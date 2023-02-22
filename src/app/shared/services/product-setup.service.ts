import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

import { ProductElements } from '../models/product-setup';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSetupService {
  
  constructor(private httpClient: HttpClient) { }
  
  getAllProducts()
  {
    return this.httpClient.get<ProductElements[]>(`${environment.apiUrl}/products/`).pipe(catchError(this.errorHandler));
  }

  getAllCategories(){
    return this.httpClient.get(`${environment.apiUrl}/products/categories`).pipe(catchError(this.errorHandler));
  }
  
  createProduct(formValue:any)
  {
    let id = formValue.id;
    if (id)
    {
      return this.httpClient.put(`${environment.apiUrl}/products/${id}/`, formValue).pipe(catchError(this.errorHandler));
    }
    else
    {
      delete formValue.id;
      return this.httpClient.post(`${environment.apiUrl}/products/`,formValue).pipe(catchError(this.errorHandler));
    }
  }
  
  deleteProduct(id:any)
  {
    return this.httpClient.delete(`${environment.apiUrl}/products/${id}/`,id).pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error:HttpErrorResponse)
  {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.status} Server Error`;
    }
    return throwError(() => new Error(errorMessage));
  }
  
}