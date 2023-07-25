import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList = new BehaviorSubject([])
  cartitemArray:any=[]

  constructor() { }

  addToCart(product:any){
    this.cartitemArray.push(product)
    this.cartItemList.next(this.cartitemArray)
    console.log(this.cartItemList);
    this.grandTotal()
    
  }
  // grand total
  grandTotal(){
    let total=0
    this.cartitemArray.map((item:any)=>{
      total+= item.price
      console.log( total);
      
    })
    return total
  }

  // remove an item from cart list 
  removeCartItem(product:any){
    this.cartitemArray.map((item:any,index:any)=>{
      if(product.id==item.id){
         this.cartitemArray.splice(index,1)
      }
    })
    this.cartItemList.next(this.cartitemArray)
  }

  // emptycart
  removeCart(){
    this.cartitemArray=[]
    this.cartItemList.next(this.cartitemArray)
  }
}
