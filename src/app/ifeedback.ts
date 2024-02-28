export interface Ifeedback {
    fname:string;
    lname:string;
    email:string;
    state:string;
    feedback:string;
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