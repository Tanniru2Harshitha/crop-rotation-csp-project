export interface Icrop {
    crop_name:string;
    year1_crop:string;
    year2_crop:string;
    year3_crop:string;
    year4_crop:string;
    crop_result:string;
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