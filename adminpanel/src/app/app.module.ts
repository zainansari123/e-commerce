import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule } from '@angular/http';
import {RouterModule,Route} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { ProductComponent } from './product/product.component';
import { CateogaryComponent } from './cateogary/cateogary.component';
import { FileSelectDirective } from 'ng2-file-upload';
//import { NgPipesModule } from 'ngx-pipes';

const appRoutes:Route[]=[
{path:'',redirectTo:'/login',pathMatch:'full'},
{ path:'login',component:LoginComponent},
{
	path:'dashboard',component:DashboardComponent,
	children: [
   {path:'', redirectTo:'default',pathMatch:'full'},
    {path:'default',component:DefaultComponent},
		{path:'product', component:ProductComponent},
		{path:'cateogary' , component:CateogaryComponent}	
	]	
}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DefaultComponent,
    ProductComponent,
    CateogaryComponent,FileSelectDirective
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes),//NgPipesModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
