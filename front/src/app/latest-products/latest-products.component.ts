import { Component, OnInit } from '@angular/core';
import { CateogaryComponent } from '../cateogary/cateogary.component';
import { Http } from '@angular/http';
@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {


products;
  constructor(private _http:Http) { }
 compare = function(prod1,prod2){
 	if(prod1.dat<prod2.dat){
 		return -1;
 	}
 	else if(prod1.dat>prod2.dat){
 		return 1;
 	}
 	else{
 		return 0;
 	}
 };
  ngOnInit() {
  	this._http.get('http://localhost:3000/fetchPro')
  	.map((res)=>{return res.json()})
  	.subscribe((res)=>{
  		this.products=res.msg;
  		for(let i=0;i<4;i++){
  			this.products.sort(this.compare).reverse();
  		}
  	})
  }

}
