import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None - This applies this components styling globally
  //encapsulation: ViewEncapsulation.Emulated (Default) / ViewEncapsulation.Native - This applies to this component only
})
export class AppComponent {
  serverElements: { type: string, name: string, content: string }[] = [];
  itemCreated(data: { type: string, name: string, content: string }) {
    this.serverElements.push(data)
  }
  changeFirstOne() {
    //This changes the first element name to demonstrate ngOnChange() call
    this.serverElements[0].name = "Changed!!"
  }
  removeLast() {
    this.serverElements.pop()
  }
}
