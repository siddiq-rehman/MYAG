import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-reportdetail',
  templateUrl: './reportdetail.component.html',
  styleUrls: ['./reportdetail.component.css']
})
export class ReportdetailComponent implements OnInit {

ReportDetailData=[];
frmdate="";
todate="";

orginalReportDetailData=[];
tempData;


  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
   this.loadReportData(); 
  }

  ngAfterViewInit() {
    
      let mapsheight=$(window).height()-$(".nav-tabs").height();
      console.log(mapsheight)
     // $('app-filter').css("height",mapsheight)
      $('.reportDetail').css("height",mapsheight)


      window.addEventListener("toDatePick", (e:any)=>{
        this.todate=e.date;
        console.log(e.date);
        this.mainFilter();
      })    
  
      window.addEventListener("frmDatePick", (e:any)=>{
        this.frmdate=e.date;
         console.log(e.date);
         this.mainFilter();
      })  

         

      $('#shiftid label input:checkbox').change((e)=> {
        this.mainFilter();
      })

      $('#routecheckid label input:checkbox').change((e)=> {
        //console.log("routeid checkd",$(this).val(), this.checked);
        //this.mainFilter();

        this.mainFilter();
      })
      $('#ackid label input:checkbox').change((e)=> {
        this.mainFilter();
      })


    }

  loadReportData(){
   // console.log("going to load the data");
    this.myservice.getReportdetails((repData)=>{
      this.orginalReportDetailData=repData;
      this.ReportDetailData=this.orginalReportDetailData;
   //   console.log(this.ReportDetailData);
    });
  }
  filterShift(val,checked){
    //console.log("filtterShift")
    return this.orginalReportDetailData.filter((data,i)=>{
      if(checked){
        return data.shift===val;
      }
    })
  }

  filterAck(arr,val,checked){
   //console.log(val,checked);
  //console.log("inside filter ack",arr);
  if(arr.length===0)
   arr=this.orginalReportDetailData;
    return arr.filter((data,i)=>{
      if(checked){
       // console.log(data.ack_status,val);
     //  console.log(1);
        return data.ack_status===val;
      }
    })
  }

  filterRoute(arr,val,checked){
   if(arr.length===0)
    arr=this.orginalReportDetailData;
     return arr.filter((data,i)=>{
       if(checked){
         return data.route_number===val;
       }
     })
   }


  shiftFilter=true;
  ackFilter=true;
  routeFilter=true;
  frmdateFilter=true;
  todateFilter=true;
  temp;

  mainFilter(){
   // console.log("main filter")
    this.tempData=[]
    let __this=this;

    //------going for shit iltering
    $.each($("#shiftid label input:checkbox"), function(i){
      if(!this.checked)
      __this.shiftFilter=false;
      __this.tempData=__this.tempData.concat( __this.filterShift($(this).val(),this.checked))
    });
    
    if(__this.shiftFilter===true ){
      this.tempData=[];
    }
    __this.temp=__this.tempData;
    __this.tempData=[];

    //--going or ack filtterring
    if(__this.temp.length===0 && !__this.shiftFilter){
      __this.tempData=[]
     }
    else{
    $.each($("#ackid label input:checkbox"), function(i){
      if(!this.checked)
       __this.ackFilter=false;
  
      if(__this.shiftFilter===true){
      __this.tempData=__this.tempData.concat(__this.filterAck([],$(this).val(),this.checked))
      }
      else{
      __this.tempData=__this.tempData.concat(__this.filterAck(__this.temp,$(this).val(),this.checked))
      }
    });
  }
    if(__this.shiftFilter===true && __this.ackFilter===true){
      this.tempData=[];
    }
    __this.temp=__this.tempData;
    __this.tempData=[];

    //----going ffor route filtering
    if(__this.temp.length===0 && (!__this.shiftFilter || !__this.ackFilter)){
      __this.tempData=[]
     }
     else{
    $.each($("#routecheckid label input:checkbox"), function(i){
      if(!this.checked)
       __this.routeFilter=false;
      if( __this.ackFilter===true && __this.shiftFilter===true){
      __this.tempData=__this.tempData.concat(__this.filterRoute([],$(this).val(),this.checked))
      }
      else{
      __this.tempData=__this.tempData.concat(__this.filterRoute(__this.temp,$(this).val(),this.checked))
      }
    });
  }
//working till herer


  console.log(" for from date",__this.tempData);


  if(__this.frmdate!==""){
console.log("hello")
__this.frmdateFilter=false
    if(__this.shiftFilter===true && __this.ackFilter===true && __this.ackFilter===true){
      this.tempData=this.orginalReportDetailData;
    }
    __this.temp=__this.tempData;
    __this.tempData=[];
    __this.tempData= __this.temp.filter(element => {

      //console.log(element.alert_datetime.split(" ")[0])
      return __this.frmdate <=element.alert_datetime.split(" ")[0]
      
    });

  }



  if(__this.todate!==""){
    console.log("hello")

        if(__this.shiftFilter===true && __this.ackFilter===true && __this.ackFilter===true && __this.frmdateFilter===true){
          this.tempData=this.orginalReportDetailData;
        }
        __this.temp=__this.tempData;
        __this.tempData=[];
        __this.tempData= __this.temp.filter(element => {
    
          //console.log(element.alert_datetime.split(" ")[0])
          return __this.todate >=element.alert_datetime.split(" ")[0]
          
        });
    
    }

    this.ReportDetailData=this.tempData;
    __this.shiftFilter=true;
    __this.ackFilter=true;
    __this.routeFilter=true;
    __this.frmdateFilter=true;
  }




}
