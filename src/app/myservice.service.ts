import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

interface dataObj{
        route_id: Number,
        latitude: Number,
        longitude: Number,
        alert_cnt: Number
}


export interface alertDetails{

        route_alert_id: Number,
        alert_type: String,
        alert_value: String,
        route_id: String,
        drvusername: String,
        drvemail: String,
        drvmobile: String,
        drvimage: String,
        asntusername: String,
        asntemail: String,
        asntmobile: String,
        asntimage: String
}

@Injectable()
export class MyserviceService  {

  
  constructor(private http: HttpClient) { }
  httpdata;
  cb;
  data: dataObj;
 url: String;

  getAlertFunc=()=> {
     this.http.get("http://192.168.1.8:8080/rtls/rtls/v1/getcurrentrouteinfo")
     .subscribe(     
        (data:Array<dataObj>) => {
             //   console.log("subscribed data",data)
                this.httpdata = data.map(element => {   
                        if(element.alert_cnt)
                                this.url="/assets/Red.png"
                        else
                                this.url="/assets/Green.png"  
                        return{
                                        "lat":element.latitude,
                                        "lng":element.longitude,
                                        "url":this.url,
                                        "label":element.route_id
                                }
                                
                        });
              //  console.log("subscribed data",this.httpdata);
                this.cb();
        }
     )
  }

  // service details for getting alert details


  getalertdetailsData;


  getalertdetails=(cb)=> {
          console.log("get alerts")
        this.http.get("http://192.168.1.8:8080/rtls/rtls/v1/getalertdetails/routeid/2")
        .subscribe(     
           (data:alertDetails) => {
                //   console.log("subscribed data",data)
                   this.getalertdetailsData = data
                   console.log("subscribed data alert details",this.getalertdetailsData[0]);
                   cb();
                   
                  
           }
        )
     }




  
}
