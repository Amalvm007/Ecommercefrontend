import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/services/api.service';
import { CartService } from '../products/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItemCount:number=0

  constructor( private api:ApiService , private cart:CartService){

  }

  ngOnInit(): void {

    this.cart.cartItemList.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartItemCount=data.length
        
      }
    )
    
  }

  search(event:any){
    let searchItem = event.target.value
    this.api.searchKey.next(searchItem)

  }

}
