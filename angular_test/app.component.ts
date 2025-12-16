import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  count = 0;
  message = '';

  increment() {
    this.count++;
    console.log('Count incremented to:', this.count);
  }

  greet(name: string) {
    this.message = `Hello, ${name}!`;
    console.log(this.message);
  }

  reset() {
    this.count = 0;
    this.message = '';
  }
}
