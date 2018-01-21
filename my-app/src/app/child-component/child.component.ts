import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child-component.html'
})

export class ChildComponent implements OnInit{

  @Input() public state: string;

  @Output() event: EventEmitter<string> = new EventEmitter();

  public goodbye= 'goodbye';
  ngOnInit() {}

  sendToParent(){

    this.event.emit(this.goodbye);
  }

}
