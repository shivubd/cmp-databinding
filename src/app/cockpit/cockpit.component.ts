import { Component, Output, EventEmitter, ViewChild, ElementRef, ContentChild, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, AfterContentInit{
  
  @Output('create') onCreate = new EventEmitter<{type: string, name: string, content: string}>();
  //onCreate is a custom event, which is emits the data of type given to EventEmitter<type_of_data_emitted>

  @ViewChild('serverContent') localContent: ElementRef | undefined;
  //Here 'serverContent' = #serverContent and this is bound to localContent of type ElementRef

  @ContentChild('heading', {static: false}) headingElement: ElementRef | undefined;
  //Here headingElement is a reference to element called inside the <app-cockpit>this element</>
  //we should give static true if we want to access headingElement in ngOnInit or else we can give false.
  //If we give true prints in ngOnInit as well as ngAfterContentInit
  //If we give false prints in ngAfterContentInit but not in ngOnInit
  //basically the element reference of ContentChild is initialized after ng-content is initialized 


  newServerName: string = '';
  newServerContent: string = '';
  
  onAddServer() {
    this.onCreate.emit({ type: 'server', name: this.newServerName, content: this.newServerContent });
    //onCreate.emit() this emit the given data
  }

  onAddBlueprint() {
    this.onCreate.emit({ type: 'blueprint', name: this.newServerName, content: this.newServerContent });
  }

  onAddLocalServer(servername: HTMLInputElement) {
    //Here servername is a reference to the input tag, and we can fetch the input value, type, checked etc. as shown below
    //Here localContent is of type ElementRef and is referencing input element with #serverContent reference, its value, type, checked can also be accessed using .nativeElement
    this.onCreate.emit({ type: 'server', name: servername.value, content: this.localContent?.nativeElement.value });
  }

  ngOnInit() {
    console.log('ngOnInit: ' + this.headingElement?.nativeElement.textContent)
    //To work: {static:true}
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit: ' + this.headingElement?.nativeElement.textContent)
    //works all the time
  }
}
