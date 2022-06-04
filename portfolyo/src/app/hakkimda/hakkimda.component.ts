import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hakkimda',
  templateUrl: './hakkimda.component.html',
  styleUrls: ['./hakkimda.component.css']
})
export class HakkimdaComponent implements OnInit {

  check0:boolean=false;
  check1:boolean=false;
  check2:boolean=false;
  check3:boolean=false;
  myFunction0(){
    this.check0=true;
  }
  myFunctionn0(){
    this.check0=false;
  }
  myFunction1(){
    this.check1=true;
  }
  myFunctionn1(){
    this.check1=false;
  }
  myFunction2(){
    this.check2=true;
  }
  myFunctionn2(){
    this.check2=false;
  }
  myFunction3(){
    this.check3=true;
  }
  myFunctionn3(){
    this.check3=false;
  }
  constructor() {

   }
  ngOnInit(): void {
  }

}
