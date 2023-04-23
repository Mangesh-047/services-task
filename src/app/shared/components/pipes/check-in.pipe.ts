import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkIn'
})
export class CheckInPipe implements PipeTransform {

  transform(value: number | null,) {

    if (!value) {
      return `Not check-In`
    } else {
      return new Date(value).toDateString().slice(3)
    }


  }

}
