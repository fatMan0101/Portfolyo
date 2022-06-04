import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolyo';

  constructor(){}
  ngOnInit(){}


  @ViewChild('cursor') refCursor:any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event:any){

    this.refCursor.nativeElement.style.left =event.pageX + "px";
    this.refCursor.nativeElement.style.top =event.pageY + "px";
  }


}
