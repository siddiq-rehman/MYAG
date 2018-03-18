import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()



export class MyserviceService  {

   displaydata=(data)=> {}

  constructor(private http: HttpClient) { }
  httpdata;
  cb;

  getAlertFunc=(cb)=> {
     this.http.get("http://localhost:5678/getalerts").
     subscribe(
        (data) => {this.httpdata = data;
                this.cb();
        }
     )
  }


  
}
