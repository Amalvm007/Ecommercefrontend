import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist:any;
  wishlistStatus=''
  
  constructor( private api:ApiService , private ActivatedRoute:ActivatedRoute ,private cart:CartService){

  }

  ngOnInit(): void {

    //getwishlist
    this.api.getWishlist()
    .subscribe((result:any)=>{
      this.wishlist=result.Wishlist
      if(this.wishlist.length==0){
        this.wishlistStatus='wishlist empty'
      }

    },
    (result:any)=>{
      this.wishlistStatus=result.error.message
      this.wishlistStatus='wishlist empty'

    }
    )

    
    
  }
  deleteWishlist(productId:any){
    this.api.deleteItemFromWishlist(productId)
    .subscribe((result:any)=>{
      this.wishlist=result.Wishlist
      if(this.wishlist.length==0){
        this.wishlistStatus='wishlist empty'
      }
    },
    (result:any)=>{
      alert(result.error.message)
    }
    
    )
  }
  // addToCart(product)
  addToCart(product:any){
    this.cart.addToCart(product)
    // this.deleteWishlist(product.id)

  }
  
  

}
