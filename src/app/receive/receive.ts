import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification';
@Component({
  selector: 'app-receive',
  imports: [],
  templateUrl: './receive.html',
  styleUrl: './receive.css',
})
export class Receive implements OnInit {
  notification_msg = "";
  constructor(private getNotify: Notification) {}
  ngOnInit(): void {
    this.getNotify.NotificationSubject.subscribe((D) => {
      console.log(D);
      this.notification_msg = D;
    })
  }
}
