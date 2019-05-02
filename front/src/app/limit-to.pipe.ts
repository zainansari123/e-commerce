import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
	filteredEmployee=[];
  transform(employees: any, args?: any){
   // console.log("--"+args===undefined);
  	if(args===undefined){
  		args=0;
  	}
    else{
      this.filteredEmployee=[];
            for (var i = 0; i<args; i++) {
            this.filteredEmployee[i]=employees[i];
          }
    }
  	
  	 return this.filteredEmployee;
    
  }

}
