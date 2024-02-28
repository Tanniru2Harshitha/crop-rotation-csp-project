import { Component, OnInit } from '@angular/core';
import { ScropService } from '../scrop.service';
import { InsertedSuccess, Read, Icrop } from '../icrop';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: ScropService) {}
  Roll: string = '';
  GotResult: Boolean = false;
  UpdatedUser: Icrop = {
   crop_name:'',
   year1_crop:'',
   year2_crop:'',
   year3_crop:'',
   year4_crop:'',
   crop_result:'',
  };
  Results = [];
  Read(Roll: string) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Results2=[];
  a=[];
  Read1(Roll: string) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          crop_name:this.a[0],
          year1_crop:this.a[1],
          year2_crop:this.a[2],
          year3_crop:this.a[3],
          year4_crop:this.a[4],
          crop_result:this.a[5]
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Update(crop_name: string, Details: Icrop) {
    console.log("updated successfully");
    this.Service.Update(crop_name, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(Roll: string) {
    console.log("deleted succesfully");
    this.Service.Delete(Roll).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
}