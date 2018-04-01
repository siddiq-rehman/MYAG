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


export interface reportDetailsif{


        route_alert_id: Number,
        route_id: String,
        alert_type: String,
        alert_value: String,
        ack_status: String,
        ack_comment: String,
        alert_datetime: String,
        ack_datetime: String,
        route_number: String,
        shift: String,
        Drvname: String,
        AsstName: String
}

@Injectable()
export class MyserviceService  {

  
  constructor(private http: HttpClient) { }
  httpdata;
  cb;
  data: dataObj;
 url: String;

  getAlertFunc=()=> { //To get the vehicle points on map
     this.http.get("http://localhost:5678/rtls/rtls/v1/getcurrentrouteinfo")
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


  getalertdetails=(routeid,cb)=> {  //getting the alert and acknowledgement data
          console.log("get alerts",routeid)
        this.http.get("http://localhost:5678/rtls/rtls/v1/getalertdetails/routeid/"+routeid)
        .subscribe(     
           (data:alertDetails) => {
                //   console.log("subscribed data",data)
                   this.getalertdetailsData = data
                 //  console.log("subscribed data alert details",this.getalertdetailsData[0]);
                   cb();
                   
                  
           }
        )
     }


     getReportdetailsData;

getReportdetails=(cb)=>{ //Geetting reports
//let a=[1,2,3];
  //      cb([...a]);
    
  this.http.get("http://localhost:5678/routeid")
  .subscribe(     
     (data:reportDetailsif) => {
           //  console.log("subscribed data",data)
             this.getalertdetailsData = data
           //  console.log("subscribed data alert details",this.getalertdetailsData[0]);
             cb(data);
             
            
     }
  )



}




  
}
