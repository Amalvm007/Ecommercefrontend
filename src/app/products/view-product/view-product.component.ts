import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId:any;
  viewProduct:any

  constructor( private ActivatedRoute:ActivatedRoute , private api:ApiService , private cart:CartService){

  }

  ngOnInit(): void {
    // fetch pathparameter from url 
    this.ActivatedRoute.params
    .subscribe((data:any)=>{
      console.log(data['id']);
      this.productId =data['id']
      
    })

    // view product api call
    this.api.viewProduct(this.productId)
    .subscribe((result:any)=>{
      console.log(result.product);
      this.viewProduct=result.product
    })
  }
  addtowishlist(product:any){
    this.api.addtowishlist(product)
    .subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )

  }

  // addToCart(viewProduct)
  addToCart(Product:any){
    this.cart.addToCart(Product)

    
  }


}
