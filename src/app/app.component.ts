import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  display: number;
  numbers: Array<number>;

  constructor() {
    this.display = 0;
    this.numbers = [...Array(10).keys()];
  }

  @HostListener('document:keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (event.code.includes('Digit')) {
      const aNumber = document.querySelector(`#${event.key}`);
      console.log('Key Press');
      console.log(event);
      this.display++;
    }
  }
}
