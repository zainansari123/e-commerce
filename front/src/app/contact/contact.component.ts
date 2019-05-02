import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
visitor={};

  constructor(private _http:Http) { }

  ngOnInit() {
  }
onSubmit(feedBackForm){
	//console.log(feedBackForm.value);
	console.log(this.visitor);
	this._http.post('http://localhost:3000/sendMail',this.visitor)
	.map((res)=>{return res.json();})
	.subscribe((res)=>{alert(res.msg);})
	
}
}
