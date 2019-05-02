import { Component, OnInit ,ViewChild } from '@angular/core';
import { SearchPipe} from '../search.pipe';
import { Http } from '@angular/http';
import { Router } from'@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
searchText;
allCateogaries;
selectedCat="ALL";
user={};
signUp={};
statusMessage="";

  constructor(private _http:Http,private _router:Router) { }

  ngOnInit() {
  	this._http.get('http://localhost:3000/fetchCat')
  	.map((res)=>res.json())
  	.subscribe((res)=>{
  		if(res.error==0){
  			this.allCateogaries=res.msg;
  		}
  		else{
  			alert(res.msg);
  		}
  	})
  }

getSearchedData(){

	this._router.navigate(['/searchResult',this.searchText,this.selectedCat]);
}
doSignUp(){
console.log(this.signUp);
this._http.post('http://localhost:3000/userSignUp',this.signUp)
.map((res)=>{return res.json();})
  .subscribe((res)=>{
   this.statusMessage=res.msg;

  });
}

doLogin()
{
  console.log(this.user);
  this._http.post('http://localhost:3000/login',this.user)
  .map((res)=>{return res.json();})
  .subscribe((res)=>{
    this.statusMessage=res.msg;
    if(res.error===0){
      console.log(res);
      this._router.navigate(['/welcome',res.uname]);
    }
  });
}
redirectToCat(){
	if(this.selectedCat==="ALL" && (this.searchText=="" || this.searchText==undefined || this.searchText==null)){
		this._router.navigateByUrl('');
	}
	else{
		if(this.searchText=="" || this.searchText==undefined || this.searchText==null){
			this._router.navigate(['/cateogary',this.selectedCat]);
		}
		else{
			this.getSearchedData();
		}
	}
}
}
