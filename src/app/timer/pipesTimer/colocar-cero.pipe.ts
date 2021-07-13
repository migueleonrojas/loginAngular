import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colocarCero'
})
export class ColocarCeroPipe implements PipeTransform {

  transform(value:any): unknown {
    if(value < 10){

      return '0' + value; 

    }

    else{

      return value;
      
    }
    
  }

}
