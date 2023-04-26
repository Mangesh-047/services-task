import { Injectable } from "@angular/core";
import { Ipassanger } from "../models/passenger";
import { SnackbarService } from "./snackbar.service";



@Injectable({
    providedIn: 'root'
})
export class PassengerService {

    //api call

    passengerArray: Array<Ipassanger> = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
    }, {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    }, {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
    }, {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }]
    }, {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
    }];

    constructor(private _snackbar: SnackbarService) { }

    getPassArray() {
        return this.passengerArray
    }


    updatePassName(id: number, name: string) {

        this.passengerArray.forEach(e => {
            if (e.id === id) {
                e.fullname = name
            }
        })

        this._snackbar.snackBarOpen(`Passenger name is Changed to ${name}`)


    }

    deletePass(id: number, name: string) {
        let delId = this.passengerArray.findIndex(e => e.id === id)

        this.passengerArray.splice(delId, 1)

        this._snackbar.snackBarOpen(`Passenger name is Deleted ${name}`)

        // console.log(delId)
    }
}