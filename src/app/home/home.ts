import { Component } from '@angular/core';
import { Send } from '../send/send';
import { Receive } from '../receive/receive';

@Component({
  selector: 'app-home',
  imports: [Send, Receive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
