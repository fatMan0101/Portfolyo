import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.css']
})

 export class IletisimComponent implements  OnInit {
   title ='Contact'



   contactForm!:FormGroup;
   isSubmit =true;
   submitMessage='';

   private myForm!:AngularFirestoreCollection<any>;

   constructor(private formBuilder: FormBuilder, private firstore: AngularFirestore){

    }

    ngOnInit(){

     this.myForm = this.firstore.collection('enquiry');

     this.contactForm = this.formBuilder.group({
       name:[null,Validators.required],
       email:[null,[Validators.required,Validators.email]],
       message:[null,Validators.required],
       subject:[null,Validators.required]
     })


   }

   submitData(value:any){
     // console.log(value);

     this.myForm.add(value)
     .then((_res: any)=>{
       this.submitMessage='Submitted Successfully';
     })
     .catch((err: any)=>{
       console.log(err);
     })

     this.isSubmit=true;

     setTimeout(() =>{
       this.isSubmit=false;
     },8000);
}

}
