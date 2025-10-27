import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Notification {
  public NotificationSubject = new Subject<string>();
  constructor() { }
  sendNotification(data: any){
    this.NotificationSubject.next(data);
  }
}
