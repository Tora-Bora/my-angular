import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'cursor-gesture',
  templateUrl: './cursor-gesture.component.html',
  styleUrls: ['./cursor-gesture.component.css'],
  animations: [
    trigger('stateTransition', [
      state('inactive', style({
        width: '0px',
        height: '0px',        
        visibility: 'hidden',
        transform: 'translate3d(25px,25px,0)'
      })),
      state('active',   style({
        width: '50px',
        height: '50px',
        transform: 'translate3d(0,0,0)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ])
  ]
})
export class CursorGestureComponent implements OnInit { 

  animationState: string = 'active';    

  clientX: number = 0;
  clientY: number = 0;

  mousemove$ = Observable.fromEvent<MouseEvent>(document, 'mousemove').subscribe((event) => {      
    this.clientX = event.clientX - 25;
    this.clientY = event.clientY - 25;
  });

  mouseupdown$ = Observable.fromEvent(document, 'mouseup').startWith(Observable.fromEvent(document, 'mousedown')
  .subscribe( () => { this.animationState = 'active' }))
  .debounceTime(100)
  .subscribe( () => { this.animationState = 'inactive' });

  constructor() { }

  ngOnInit() {                   
  }

  ngOnDestroy() {
    this.mousemove$.unsubscribe();
    this.mouseupdown$.unsubscribe();
  }

}
