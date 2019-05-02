import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {LimitToPipe} from './limit-to.pipe';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { FooterComponent } from './footer/footer.component';
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { CateogaryComponent } from './cateogary/cateogary.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPriceWiseComponent } from './product-price-wise/product-price-wise.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { ContactComponent } from './contact/contact.component';
import { SearchPipe } from './search.pipe';
import { SearchResultComponent } from './search-result/search-result.component';
import { SliderForPriceComponent} from './slider-for-price/slider-for-price.component';
import { WelcomeComponent } from './welcome/welcome.component';



const appRoutes:Routes=[
{path:'',component:LatestProductsComponent},
  { path:'cateogary/:cname',component:CateogaryComponent,
  children:[{path:"productDetails/:pname",component:ProductDetailsComponent}]},
   { path:'prodPriceWise/:minPrice/:maxPrice',component:ProductPriceWiseComponent},
   
   {path:'contact' , component:ContactComponent},
   {
     path:'searchResult/:searchText/:selectedCat',component:SearchResultComponent
   },
   {
     path:'welcome/:userName',component:WelcomeComponent
   }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    SidebarComponent,
    FeaturedProductComponent,SliderForPriceComponent,
    FooterComponent,
    LatestProductsComponent,
    CateogaryComponent,
    ProductDetailsComponent,LimitToPipe,SearchPipe, ProductPriceWiseComponent,
     ContactComponent, SearchResultComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
