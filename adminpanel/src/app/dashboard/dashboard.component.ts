import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

title:string;
  constructor(private _cookieService:CookieService,private router:Router) { }

  ngOnInit() {

  	if(this._cookieService.get("name")!=="admin"){
  		this.router.navigateByUrl('/login');
  	}
  	else{
  	this.title=this._cookieService.get("name");	
  	}
  	console.log('Inside Init..'+this.title);
  }
  doLogOut(){
  	this._cookieService.delete("name");
  	this.router.navigateByUrl('/login');
  }

}
