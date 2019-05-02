import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
selectedMaxPrice;
selectedMinPrice;
price=["1000-20000","20000-50000","50000-100000"];
selectedPriceRange;
  constructor(private _http:Http,private _router:Router) {
   }
items:any;
  ngOnInit() {
  		this._http.get('http://localhost:3000/fetchCat')
		  	.map((res)=>res.json())
		  	.subscribe((res)=>{
		  	//	console.log(res.msg);
		  		this.items=res.msg;
		  	});

}
   /* findProductPriceWise(){
      let range=[];
     // console.log(this.selectedMaxPrice);
     // console.log(this.selectedMinPrice);
     console.log("fired");
      range=this.selectedPriceRange.split("-");
      this.selectedMinPrice=range[0];
      this.selectedMaxPrice=range[1];
      this._router.navigateByUrl("/prodPriceWise/"+this.selectedMinPrice+'/'+this.selectedMaxPrice);

      }
      */
      findProductPriceWise(p){
      console.log(p);
      let range=[];
     // console.log(this.selectedMaxPrice);
     // console.log(this.selectedMinPrice);
     console.log("fired");
      range=p.split("-");
      this.selectedMinPrice=range[0];
      this.selectedMaxPrice=range[1];
      this._router.navigateByUrl("/prodPriceWise/"+this.selectedMinPrice+'/'+this.selectedMaxPrice);

      }

    
}