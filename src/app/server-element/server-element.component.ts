import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked{
  @Input('srvElement') element: { type: string, name: string, content: string } | undefined;
  //@Input() decorator marks element as input property and we can pass a value to this using PROPERTY BINDING
  //PARENT -> CHILD [@Input PROPERTY-BINDING]
  //CHILD -> PARENT [@Output EVENT-BINDING]
  //here in @Input('srvElement') srvElement is alias to element, we should now use [srvElement] for property binding

  @Input() name: string | undefined;
  //Because change in a primitive type data is caught by ngOnChanges
  //but change in object cannot be caught by ngOnChanges as the reference object is reference and it does not change.
  //i.e element is reference to {Object}, when we change anything in obj still the reference remains same, where as if it is primitive type then ref also changes.

  //LIFE CYCLE HOOKS
  constructor() {
    console.log("CONSTRUCTOR IS CALLED")
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges IS CALLED, Changes = ' + JSON.stringify(changes))
  }

  ngOnInit() {
    console.log('ngOnInit IS CALLED')
  }

  ngDoCheck() {
    console.log('ngDoCheck IS CALLED')
    //Called after any change,event (i.e there is a event on view that does not change anything, like a button click that does nto change anything)
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit IS CALLED')
    //Called first time when <ng-content> is loaded
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked IS CALLED')
    //Called everytime when there is change in <ng-content>
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit IS CALLED')
    //Called first time when entire view of this component is initialized
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked IS CALLED')
    //Called everytime when there is change in any element of entire view of component
  }
  ngOnDestroy() {
    console.log("ngOnDestroy WAS CALLED")
  }
}
