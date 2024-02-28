export interface userdetails {
    Id: String;
    landtype: String;
    region: String;
    season: String;
    area: String;
  }
  export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }
