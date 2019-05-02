import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {IItem} from '../IItem';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ReversePipe} from 'ngx-pipes' ;
const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-cateogary',
  templateUrl: './cateogary.component.html',
  styleUrls: ['./cateogary.component.css'],
  providers :[ReversePipe]
})
export class CateogaryComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url: URL,
	allowedMimeType: ['image/png', 'image/jpeg'],
	 itemAlias: 'snaps'});

	items:IItem[];
  constructor(private _http:Http) { }
  item:any={};
  modalFactor:boolean=false;
  selectedItem:any={cname:""};
  oldItem:any={cname:""};
  ngOnInit() {
  		this._http.get('http://localhost:3000/fetchCat')
		  	.map((res)=>res.json())
		  	.subscribe((res)=>{
		  		console.log(res.msg);
		  		this.items=res.msg;
		  	});
		  	this.uploader.onAfterAddingFile = (fileItem)=> { 
        	fileItem.withCredentials = false;
        	console.log(fileItem);
       this.uploader.clearQueue();
        this.uploader.queue[0] = fileItem;

         	};

  }
		  OnSubmit(){
		  	this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
		  	    	console.dir(item);
		  	    	debugger;
            console.log("ImageUpload:uploaded:1"+response);
          // debugger;
            console.log("Response2"+response);
           this.item.imagePath=JSON.parse(response);
           console.log(this.item.imagePath);
         	console.log(this.item.name+"3===>"+this.item.imagePath.msg);
		  	//debugger;    
		  	this._http.post('http://localhost:3000/saveCat',
		  		{"itemName":this.item.name,"imagePath":this.item.imagePath.msg})
		  	.map((res)=>res.json())
		  	.subscribe((res)=>{
		  		alert(res.msg);
		  		 if(res.err==0){
          	  		window.location.reload();
          		}
		  		
		  	});
        };	
		  }
		  removeItem(item:IItem){
		  	let decision=confirm("Do You really Want to remove this item ?");
		  	console.log(decision);
		  	if(decision===true){
		  		this._http.post('http://localhost:3000/delCat',{"item":item.cname,
		  			"image":item.cimagePath})
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
		  sendSelectedItem(item:any){
		  	//console.log(item);
		  	this.selectedItem.cname=item.cname;
		  	this.oldItem=item;
		  }
		  updateItem(value){
		  	console.log({"OldItem":this.oldItem.cname,"newItem":value.cname});
		  	this.uploader.onCompleteItem =
		  	 (item:any, response:any, status:any, headers:any) => {
		  	    	console.dir(item);
		  	    	console.log(response);
		  	    	debugger;
           this.item.imagePath=JSON.parse(response);

		  	this._http.post('http://localhost:3000/updateCat',
		  		{"OldItem":this.oldItem.cname,"newItem":value.cname,
		  		"imagePath":this.item.imagePath.msg})
		  		.map((res)=>res.json())
		  		.subscribe((res)=>{
		  			if(res.err==0)
		  			{
		  				alert(res.msg);
		  				window.location.reload();
		  			}
		  			
		  		});
		  		
		  }
		}
}
