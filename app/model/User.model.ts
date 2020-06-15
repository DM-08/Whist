export class User {

  public email: string;
  public password: string;
  public token?: string;


  constructor(e: string, p:string,tok:string){
    //@Optional()
    this.email=e;
    this.password=p;
    this.token=tok;
  }

}
