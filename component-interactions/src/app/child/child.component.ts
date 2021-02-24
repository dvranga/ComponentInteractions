import { Component, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {

  @Input() loggedIn:boolean

  message:string;

  name='Ranganath';

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    const loggedChanges=changes['loggedIn'];
    if(loggedChanges.currentValue===true){
      this.message="Your are logged in";
    }
    else{
      this.message="please login";
    }
  }

  constructor() { }

  @ViewChild('subject') subject='maths';

  @Output() emit=new EventEmitter();


  onClickToWish(){
    alert('Hey '+this.name);
  }
  // get loggedIn():boolean{
  //   return this._loggedIn;
  // }

  // @Input()
  // set loggedIn(value:boolean){
  //   this._loggedIn=value;
  //   if (value===true) {
  //     this.message="I am logged in";
  //   }
  //   else{
  //     this.message="Please login";
  //   }



  }


