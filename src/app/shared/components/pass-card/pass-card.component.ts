import { Component, Input, OnInit } from '@angular/core';
import { Ipassanger } from '../../models/passenger';
import { PassengerService } from '../../services/passanger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {


  isEditable = false
  @Input()
  passObj!: Ipassanger
  constructor(private _passService: PassengerService) { }

  ngOnInit(): void {
  }

  onEdit() {
    this.isEditable = !this.isEditable
  }

  onUpdateName(fullname: HTMLInputElement) {
    this.isEditable = !this.isEditable

    this._passService.updatePassName(this.passObj.id, fullname.value)
  }

  onDelete(fullname: HTMLInputElement) {
    this._passService.deletePass(this.passObj.id, fullname.value)
  }



}
