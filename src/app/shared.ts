import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Shared {
  // Normal Subject — doesn’t remember previous values
  subject$ = new Subject<string>();

  // BehaviorSubject — remembers the latest value
  behaviorSubject$ = new BehaviorSubject<string>('Initial Value');

  // ReplaySubject — replays the last 2 values
  replaySubject$ = new ReplaySubject<string>(2);

  sendValue(value: string) {
    console.log('Sending:', value);
    this.subject$.next(value);
    this.behaviorSubject$.next(value);
    this.replaySubject$.next(value);
  }
}
