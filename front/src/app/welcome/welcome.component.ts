import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
myUserName;
statusMessage;
  constructor(private _ac:ActivatedRoute,private _http:Http) { }

  ngOnInit() {
  	this.myUserName=this._ac.snapshot.params['userName'];
  }
  doLogout(){
  	this._http.get('http://localhost:3000/logout').map((res)=>{ return res.json();}).subscribe((res)=>{
  		if(res.error===0){
  			this.statusMessage=res.msg;
  		}
  	})
  }

}
