import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestSignals } from './test-signals/test-signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
