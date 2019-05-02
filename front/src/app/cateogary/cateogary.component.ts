import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http} from '@angular/http';
import { PaginationControlsDirective} from 'ngx-pagination';
@Component({
  selector: 'app-cateogary',
  templateUrl: './cateogary.component.html',
  styleUrls: ['./cateogary.component.css'],
})
export class CateogaryComponent implements OnInit {
	catname:string;
	fetchedProducts:any;
	statusMessage:any;

  constructor(private _ac:ActivatedRoute,private _http:Http) { }

  ngOnInit() {
  	this._ac.params.subscribe((param)=>{
  		this.catname=param['cname'];

  		this._http.get('http://localhost:3000/fetchPro/'+this.catname)
		  	.map((res)=>res.json())
		  	.subscribe((res)=>{
          if(res.err===0){
            this.fetchedProducts=res.msg;
        }
		  		if(res.err===1){
		  			this.statusMessage=res.msg;
		  		}
		  	});

  	})
  }

}
