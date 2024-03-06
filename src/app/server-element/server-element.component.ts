import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input('srvElement') element: { type: string, name: string, content: string } | undefined;
  //@Input() decorator marks element as input property and we can pass a value to this using PROPERTY BINDING
  //PARENT -> CHILD [@Input PROPERTY-BINDING]
  //CHILD -> PARENT [@Output EVENT-BINDING]
  //here in @Input('srvElement') srvElement is alias to element, we should now use [srvElement] for property binding
}
