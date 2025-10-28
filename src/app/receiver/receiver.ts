import { Component, OnInit } from '@angular/core';
import { Shared } from '../shared';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.html',
  styleUrl: './receiver.css',
})
export class Receiver implements OnInit {
  subjectValue = '';
  behaviorValue = '';
  replayValues: string[] = [];

  constructor(private shared: Shared) {}

  ngOnInit() {
    this.shared.subject$.subscribe(val => (this.subjectValue = val));
    this.shared.behaviorSubject$.subscribe(val => (this.behaviorValue = val));
    this.shared.replaySubject$.subscribe(val => {
      this.replayValues.push(val);
    });
  }
}
