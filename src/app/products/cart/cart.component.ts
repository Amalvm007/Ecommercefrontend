import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any=[]
  grandTotal:number=0
  discountTotal:number=0
  discount:number=0
  checkoutMsg=''

  constructor( private cart:CartService ){

  }

  ngOnInit(): void {
    this.cart.cartItemList.subscribe(
      (data:any)=>{
        this.cartItems=data

      }
    )
    // total
     let total=this.cart.grandTotal()
     this.grandTotal= Number(total.toFixed(2))
     this.discountTotal=this.grandTotal
     this.discountTotal= Number(total.toFixed(2))

    
  }
  // removeItem(product)
  removeItem(product:any){
    this.cart.removeCartItem(product)
    let total=this.cart.grandTotal()
    this.grandTotal= Number(total.toFixed(2))
    this.discountTotal=this.grandTotal
    this.discountTotal= Number(total.toFixed(2))

  }
  // emptyCart()
  emptyCart(){
    this.cart.removeCart()
  }
  // discount3Percent()
  discount3Percent(){
    this.discount=this.grandTotal*.03
    this.discountTotal -=this.discount

  }
  // discount50Percent()
discount50Percent(){
  this.discount=this.grandTotal*.5
  this.discountTotal -=this.discount
}
  // discount10Percent()
discount10Percent(){
  this.discount=this.grandTotal*.1
  this.discountTotal -=this.discount
}

// cheakout
cheakout(){
this.checkoutMsg='Order Placed Successfully'
setTimeout(() => {
  this.emptyCart()
  window.location.reload()
}, 5000);
}
}
