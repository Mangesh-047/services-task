import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passanger.service';
import { Ipassanger } from '../../models/passenger';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {


  passengerArr: Array<Ipassanger> = [];

  constructor(private _passenger: PassengerService) {

    console.log(this._passenger.passengerArray);
    this.passengerArr = this._passenger.passengerArray
  }

  ngOnInit(): void {
  }

}
