import { ChangeDetectorRef, Component, effect } from '@angular/core';
import { Dialog } from '../services/dialog';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {
  constructor(private dialog : Dialog) {

    effect(() => {
      this.message = this.dialog.sms()
    })

  }


  message : string = ""


  close() {
     this.dialog.hide()
  }

}
