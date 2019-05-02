import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
	filteredProducts=[];
  transform(products: any, args?: any){
   // console.log("--"+args===undefined);
  	if(args===undefined){
  		args=0;
  	}
    else{
      this.filteredProducts=[];
            for (var i = 0; i<args; i++) {
            this.filteredProducts[i]=products[i];
          }
    }
  	
  	 return this.filteredProducts;
    
  }

}
