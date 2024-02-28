import { Component } from '@angular/core';
import {Ifeedback,UniqueConstraintError,InsertedSuccess ,Read} from '../ifeedback';
import {Subscription} from 'rxjs';
import { SfeedbackService } from '../sfeedback.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
fname='';
  lname='';
  email='';
  state='';
  feedback='';
  insertUser(item:any){
    this.email=item.name;
    console.log(this.email);
  }
  constructor(private Service:SfeedbackService) {}

  Subscription:Subscription=new Subscription();
   User:Ifeedback ={
   fname:'',
   lname:'',
    email:'',
    state:'',
    feedback:'',
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   Insert(form:NgForm){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Insert(form.value).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            // document.write("inserted succesfully");
            this.SuccessMsg="Feedback Inserted Succesfully"

          }
          else{
            console.log("Failed");
            alert("Unique constraint error");
            this.ErrorMsg="User Already Exists"
          }
        }
        
      )
      form.reset();
    }

}
