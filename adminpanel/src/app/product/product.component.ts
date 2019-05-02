import { Component, OnInit } from '@angular/core';
import { CateogaryComponent } from '../cateogary/cateogary.component';
import {Http} from '@angular/http';
import {IItem} from '../IItem';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { IProduct } from  './IProduct';

const URL = 'http://localhost:3000/api/upload/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url: URL,
	allowedMimeType: ['image/png', 'image/jpeg'],
 itemAlias: 'proSnaps'});
items:IItem[];
item:any={};
product:any={};
proMensType:string;
availItems=[];
size:string;
dressType:string;
paintingType:string;
godessType:string;
alertFactor:string;
statusMessage:string;
fetchedProducts:IProduct[];
fetchedProductCount:number;

  constructor(private _http:Http) { }

  ngOnInit() {
  	this._http.get('http://localhost:3000/fetchCat')
		  	.map((res)=>res.json())
		  	.subscribe((res)=>{
		  		this.items=res.msg;
		  	});
	this._http.get('http://localhost:3000/fetchPro')
		  	.map((res)=>res.json())
		  	.subscribe((res)=>{
          if(res.error===0){
            this.fetchedProducts=res.msg;
        }
		  		if(res.error===1){
		  			this.statusMessage=res.msg;
		  		}
		  	});

		  	this.uploader.onAfterAddingFile = (fileItem)=> { 
        	fileItem.withCredentials = false;
        this.uploader.clearQueue();
        this.uploader.queue[0] = fileItem;
        	//console.log(fileItem);
        	//debugger;
         	};
  }

  countProducts(item){
      this.fetchedProductCount=0;
      for(let j=0;j<item.products.length;j++){
        this.fetchedProductCount++;
      }
    return this.fetchedProductCount;
  }
onSubmit(){
	console.log(this.product);
  //console.log(this.product['cname']);
             debugger;
	this.uploader.onCompleteItem = (product:any, response:any,
   status:any, headers:any) => 
  {
            let imageP=JSON.parse(response);
           this.product['pimagePath']=imageP.msg;
         	this._http.post('http://localhost:3000/savePro',this.product)
		  	.map((res)=>res.json())
		  	.subscribe((res)=>{
          alert(res.msg);
          window.location.reload();
		  	});
	}
}

removeProduct(pro:IProduct){
		  	let decision=confirm("Do You really Want to remove this item ?");
		  	console.log(decision);
		  	if(decision===true){
		  		this._http.post('http://localhost:3000/delPro',pro)
		  		.map((res)=>res.json())
		  		.subscribe((res)=>{
		  			console.log("Response :"+res);
		  			if(res.err==0)
		  			{
		  				alert(res.msg);
		  				window.location.reload();
		  			}
		  		});
		  	}
		  }

selectedProduct:any={};

oldProduct:IProduct;
id:string;
sendSelectedProduct(pro:any){
        this.selectedProduct['cname']=pro.cname;
        this.selectedProduct['name']=pro.name;
        this.selectedProduct['os']=pro.os;
        this.selectedProduct['warranty']=pro.warranty;
        this.selectedProduct['processor']=pro.processor;
        this.selectedProduct['price']=pro.price;
        this.oldProduct=pro;
   }

      updateProduct(value){
       // console.log({"OldProduct":this.oldProduct,"newProduct":value});
this.uploader.onCompleteItem = (product:any, response:any,
   status:any, headers:any) => 
  {
            let imageP=JSON.parse(response);
           value['pimagePath']=imageP.msg;
            // console.log(value);
        this._http.post('http://localhost:3000/updatePro',
          {"OldProduct":this.oldProduct,"newProduct":value})
        .map((res)=>{ return res.json();})
        .subscribe((res)=>{
           alert(res.msg);
          if(res.err==0)
            {
              window.location.reload();
            }
          },(err)=>{
            console.log(err);

          })
      }
}
}
