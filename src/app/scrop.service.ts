import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Icrop,UniqueConstraintError,InsertedSuccess ,Read} from './icrop';
import {Observable} from 'rxjs';
interface InsertResponse{
  errorNum?: number;
}
@Injectable({
  providedIn: 'root'
})
export class ScropService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:8000/';

  Insert(
    Details:Icrop
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'freq/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(crop_name:string):Observable<InsertedSuccess>{
    console.log(`${this.url}freq/Read${crop_name}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}freq/Read${crop_name}`
    );
  }
  
  Delete(crop_name:string):Observable<InsertedSuccess>{
    console.log(`${this.url}freq/Delete${crop_name}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}freq/Delete${crop_name}`
    );
  }
  Update(
    crop_name:string,Details:Icrop) {
    return this.http.put(`${this.url }freq/Update${crop_name}`,Details,{headers:this.headers}
    );
}
}