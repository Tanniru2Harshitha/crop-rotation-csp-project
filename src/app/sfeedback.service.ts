import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Ifeedback,UniqueConstraintError,InsertedSuccess ,Read} from './ifeedback';
import {Observable} from 'rxjs';
interface InsertResponse{
  errorNum?: number;
}

@Injectable({
  providedIn: 'root'
})
export class SfeedbackService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:8000/';

  Insert(
    Details:Ifeedback
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'feedback/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}feedback/Read${email}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}feedback/Read${email}`
    );
  }
  
  Delete(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}feedback/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}feedback/Delete${email}`
    );
  }
  Update(
    email:string,Details:Ifeedback) {
    return this.http.put(`${this.url }feedback/Update${email}`,Details,{headers:this.headers}
    );
}
}
