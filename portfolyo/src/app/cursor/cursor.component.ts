import { Component, OnInit, HostListener,ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  @ViewChild('cursor') refCursor:any;
  @HostListener('document:mousemove',['$event'])
  onMouseMove(event:any){
    console.log('width '+ event.pageX);
    console.log('height '+ event.pageY);
    this.refCursor.nativeElement.style.left =event.pageX +'px';
    this.refCursor.nativeElement.style.top =event.pageY +'px';
  }

}
