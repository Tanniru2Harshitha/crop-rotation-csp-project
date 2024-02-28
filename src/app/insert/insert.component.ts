import { Component } from '@angular/core';
import {Icrop,UniqueConstraintError,InsertedSuccess ,Read} from '../icrop';
import {Subscription} from 'rxjs';
import { ScropService } from '../scrop.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  crop_name='';
  year1_crop='';
  year2_crop='';
  year3_crop='';
  year4_crop='';
  crop_result1='';
  insertUser(item:any){
    this.crop_name=item.name;
    console.log(this.crop_name);
  }
  constructor(private Service:ScropService) {}

  Subscription:Subscription=new Subscription();
   User:Icrop ={
   crop_name:'',
    year1_crop:'',
    year2_crop:'',
    year3_crop:'',
    year4_crop:'',
    crop_result:'',
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
            this.SuccessMsg="Inserted Succesfully"

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

