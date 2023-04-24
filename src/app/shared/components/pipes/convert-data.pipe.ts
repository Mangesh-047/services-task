import { Pipe, PipeTransform } from '@angular/core';
import { Ichild } from '../../models/passenger';

@Pipe({
  name: 'convertData'
})
export class ConvertDataPipe implements PipeTransform {

  transform(value: Ichild[] | null): Array<string> | 0 {

    // console.log(value);


    if (!value) {
      return 0
    }

    let map = value.map(e => {
      return `${e.name}  ${e.age} `
    })

    return map


  }

}
