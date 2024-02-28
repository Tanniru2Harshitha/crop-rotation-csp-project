import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ScropService } from '../scrop.service';
import {Iregister,UniqueConstraintError,InsertedSuccess ,Read} from '../iregister';
import { SregisterService } from '../sregister.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component {
  fname='';
  lname='';
  email='';
  password='';
  cpassword='';
  insertUser(item:any){
    this.email=item.name;
    console.log(this.email);
  }
  constructor(private Service:SregisterService) {}

  Subscription:Subscription=new Subscription();
   User:Iregister ={
   fname:'',
    lname:'',
    email:'',
    password:'',
    cpassword:'',
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
            this.SuccessMsg="Registered Succesfully"

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
