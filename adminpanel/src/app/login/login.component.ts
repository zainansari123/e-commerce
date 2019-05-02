import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	admin={uname:'',upass:''};
	message={error:1,msg:""};
  constructor(private http:Http,private router:Router,private _cookieService:CookieService) { }

  ngOnInit() {
  }

  doCheck(){
  		this.http.post('http://localhost:3000/adminCredentials',this.admin)
  		.map(res=>res.json())
  		.subscribe(res=>{
        
        console.log(res.msg);
        if(res.error===0){
         this._cookieService.set("name",this.admin.uname);
          this.router.navigateByUrl('/dashboard');
        }
        else if(res.error===1)
        {
          this.message.msg=res.msg;
        }
        else{
          this.message.msg="Something Wrong...Please Try Later...";
        }

      });
	}

}
