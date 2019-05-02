import { Component, OnInit } from '@angular/core';
import {Http } from '@angular/http';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
searchText;selectedCat;
  constructor(private _http:Http,private _ac:ActivatedRoute) { }
allProducts;
  ngOnInit() {
  	this._ac.params.subscribe((params)=>{
			this.searchText=params['searchText'];
			this.selectedCat=params['selectedCat'];	
			//alert('this is '+this.selectedCat);
			this._http.get("http://localhost:3000/fetchPro")
	.map((res)=>res.json())
	.subscribe((res)=>{
		if(res.error==1){
			console.log(res.msg);
						//console.log('inside if of searchResult');
		}
		else{
			//console.log('inside else of searchResult');
			this.allProducts=res.msg;
			//console.log(res.msg);
		}

	})
		});

  	
  }


}
