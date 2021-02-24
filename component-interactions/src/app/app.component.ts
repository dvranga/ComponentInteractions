import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  counter=0;
  @ViewChild('childComponent') childComponent:ChildComponent;

  name;

  @ViewChild('nameRef') nameEleRef:ElementRef;


  ngAfterViewInit(){
    this.childComponent.message='this is view child example';
    this.nameEleRef.nativeElement.focus();
    console.log(this.nameEleRef)
  }

  title = 'component-interactions';//string interpolation

  image='https://www.spiritbutton.com/wp-content/uploads/2018/02/5ebd3eacef84c64260c27c29f647fd46.jpg';//property binding

  onClick(){
    this.counter+=1;
  }

  onUserSignIn:boolean;




}
