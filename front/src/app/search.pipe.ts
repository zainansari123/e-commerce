import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
filteredProducts=[];
filteredProducts2=[];
  transform(products:any,searchText:any,searchCriteria?:any){
    //console.log("Inside Search Pipe..");
    //console.log("My Products "+products);
    //console.log(searchCriteria);
    searchText=searchText.toLowerCase();
  // console.log(products[1].name.includes(searchText));
   if(searchText===undefined || searchText===""){
    this.filteredProducts=[];
  }
  else{
    let k=0;
    this.filteredProducts2=[];
    this.filteredProducts=[];

      if(searchCriteria.toLowerCase()==="all" || searchCriteria===""|| searchCriteria=== undefined){
            for (var i = 0; i < products.length; i++) 
              {
         // console.log(products[i].name.includes(searchText));
                    if(products[i].name.toLowerCase().includes(searchText) || 
                      products[i].cname.toLowerCase().includes(searchText) || 
                      products[i].price.toString().includes(searchText) || 
                      products[i].os.toLowerCase().includes(searchText)||
                      products[i].warranty.toLowerCase().includes(searchText) || 
                      products[i].processor.toLowerCase().includes(searchText) )
                    {
                        this.filteredProducts[k]=products[i];
                         k++;
                    } //if ends
              }        
      }

         for (var i = 0; i < products.length; i++) 
         {

             if(searchCriteria.toLowerCase()===products[i].cname.toLowerCase())
            {
                if(products[i].name.toLowerCase().includes(searchText) ||
                  products[i].cname.toLowerCase().includes(searchText) || 
                  products[i].price.toString().includes(searchText) || 
                  products[i].os.toLowerCase().includes(searchText)||
                  products[i].warranty.toLowerCase().includes(searchText) || 
                  products[i].processor.toLowerCase().includes(searchText) )
                    {
                        this.filteredProducts2[k]=products[i];
                         k++;
                         console.log("goes here");
                    } //if ends
           }  
            else{
                   console.log('do nothing..');
               }
      }
     console.log("Filtered Products "+this.filteredProducts);
  }//else ends
  if(searchCriteria.toLowerCase()==="all"){
    return this.filteredProducts;
  }
  else{
    return this.filteredProducts2;
  }
       }//function transform ends
} //class ends
