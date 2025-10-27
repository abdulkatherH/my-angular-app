import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notification } from '../notification'
@Component({
  selector: 'app-send',
  imports: [FormsModule],
  templateUrl: './send.html',
  styleUrl: './send.css',
})
export class Send {
  constructor(public notify: Notification) {}
  message = '';
  sendInput(data: string) {
    this.notify.sendNotification(data)
  }
}
