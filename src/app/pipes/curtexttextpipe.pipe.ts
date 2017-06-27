import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({ name: 'curtailText' })
export class CurtailTextPipe implements PipeTransform {
  transform(value: string, length: number): string {    
    
    let filteredText : string;    

    if(value.length <= length){
        filteredText = value;
    }else{

      filteredText = value.substring(0, length) + "...";
      
    }    
    return filteredText;
  }
}