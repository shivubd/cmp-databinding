import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  
  @Output('create') onCreate = new EventEmitter<{type: string, name: string, content: string}>();
  //onCreate is a custom event, which is emits the data of type given to EventEmitter<type_of_data_emitted>
  newServerName: string = '';
  newServerContent: string = '';
  
  onAddServer() {
    this.onCreate.emit({ type: 'server', name: this.newServerName, content: this.newServerContent });
    //onCreate.emit() this emit the given data
  }

  onAddBlueprint() {
    this.onCreate.emit({ type: 'blueprint', name: this.newServerName, content: this.newServerContent });
  }
}
