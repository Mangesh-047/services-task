import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passanger.service';
import { Ipassanger } from '../../models/passenger';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  checkIn!: number
  passengerArr: Array<Ipassanger> = [];

  constructor(private _passenger: PassengerService) {
  }

  ngOnInit(): void {
    console.log(this._passenger.passengerArray);
    this.passengerArr = this._passenger.getPassArray()
    this.checkIn = this._passenger.getPassArray().filter(e => e.checkedIn === true).length
  }

}
