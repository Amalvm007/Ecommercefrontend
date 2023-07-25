import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) {

   }
  //  to hold searchkey from header compound
  searchKey =new BehaviorSubject('')

  // All-products api 
  getAllProducts(){
    return this.http.get('http://localhost:3000/all-products')
  }

  // view-product
  viewProduct(productId:any){
   return  this.http.get('http://localhost:3000/view-products/'+productId)

  }

  // add-to-wishlist
  addtowishlist(product:any){
    return this.http.post('http://localhost:3000/add-to-wishlist',product)

  }

  // get-wishlist
  getWishlist(){
    return this.http.get('http://localhost:3000/get-wishlist')
  }

  // remove-item-wishlist/:productId api call
  deleteItemFromWishlist(productId:any){
    return this.http.delete('http://localhost:3000/remove-item-wishlist/'+productId)

  }
}
