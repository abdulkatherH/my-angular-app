import { Component } from '@angular/core';
import { Sender } from '../sender/sender';
import { Receiver } from '../receiver/receiver';

@Component({
  selector: 'app-home',
  imports: [Sender, Receiver],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
