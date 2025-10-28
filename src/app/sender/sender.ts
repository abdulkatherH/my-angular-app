import { Component } from '@angular/core';
import { Shared } from '../shared';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender',
  imports: [FormsModule],
  templateUrl: './sender.html',
  styleUrl: './sender.css',
})
export class Sender {
  message = '';

  constructor(private shared: Shared) {}

  send() {
    this.shared.sendValue(this.message);
    this.message = '';
  }
}
