import { Component, OnInit , ViewChild } from '@angular/core';
import { CateogaryComponent} from '../cateogary/cateogary.component';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	myObj={};
	productName:string;
 @ViewChild(CateogaryComponent)
private componenta:CateogaryComponent;

  constructor(private _componenta: CateogaryComponent,private _ac:ActivatedRoute) { }

  ngOnInit() {
  	//console.log('hi');
  this.myObj=this._componenta;
  	//console.log(this.myObj);
  	this._ac.params.subscribe((params)=>{
  		this.productName=params['pname'];
  	})

  }

}
