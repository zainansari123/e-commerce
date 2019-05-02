import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http} from '@angular/http';
@Component({
  selector: 'app-product-price-wise',
  templateUrl: './product-price-wise.component.html',
  styleUrls: ['./product-price-wise.component.css']
})
export class ProductPriceWiseComponent implements OnInit {
selectedMaxPrice;
selectedMinPrice;
fetchedProductsPriceWise;
  constructor(private _ac:ActivatedRoute,private _http:Http) { }
productsPriceWise;
 compare = function(prod1,prod2){
   if(prod1.price<prod2.price){
     return -1;
   }
   else if(prod1.price>prod2.price){
     return 1;
   }
   else{
     return 0;
   }
 };

  ngOnInit() {
    this._ac.params.subscribe((params)=>{
   this.selectedMinPrice=params['minPrice'];
  this.selectedMaxPrice=params['maxPrice'];
      this._http.get('http://localhost:3000/fetchPro/'+this.selectedMinPrice+'/'+this.selectedMaxPrice)
      .map((res)=>{return res.json();})
      .subscribe((res)=>{
        console.log('response');
        this.fetchedProductsPriceWise=res.msg;
        if(res.error===0){
          console.log(this.fetchedProductsPriceWise);
        this.fetchedProductsPriceWise.sort(this.compare);
        }
        else {
         alert(res.msg);
        }
        
      });
    });

  
  }

}
