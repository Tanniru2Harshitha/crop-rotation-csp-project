import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Iregister,UniqueConstraintError,InsertedSuccess ,Read} from './iregister';
import {Observable} from 'rxjs';
interface InsertResponse{
  errorNum?: number;
}
@Injectable({
  providedIn: 'root'
})
export class SregisterService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:8000/';

  Insert(
    Details:Iregister
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'users/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}users/Read${email}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}users/Read${email}`
    );
  }
  
  Delete(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}users/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}users/Delete${email}`
    );
  }
  Update(
    email:string,Details:Iregister) {
    return this.http.put(`${this.url }users/Update${email}`,Details,{headers:this.headers}
    );
}
}