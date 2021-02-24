import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  private _loggedIn:boolean

  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  get loggedIn():boolean{
    return this._loggedIn;
  }

  @Input()
  set loggedIn(value:boolean){
    this._loggedIn=value;
    if (value===true) {
      this.message="I am logged in";
    }
    else{
      this.message="Please login";
    }
  }

}
