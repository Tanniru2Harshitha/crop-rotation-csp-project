export interface Iregister {
    fname:string;
    lname:string;
    email:string;
    password:string;
    cpassword:string;
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    Result: any;
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
     Result: [];
    }
    export interface InsertResponse {
      errorNum?: number;
    }
