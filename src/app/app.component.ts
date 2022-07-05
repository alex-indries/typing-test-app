import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomSentence = lorem.sentence();
  textIsEqual = false;
  enteredText = '';

  handleTyping(val: any) {
    this.enteredText = val;
  }
}
