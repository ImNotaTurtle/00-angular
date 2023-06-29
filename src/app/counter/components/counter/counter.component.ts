import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  public counter: number = 10;

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }

  resetCounter() {
    this.counter = 10;
  }
}
