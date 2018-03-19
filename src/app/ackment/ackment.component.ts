import { Component, OnInit, ViewChild } from '@angular/core';


import * as $ from 'jquery';
import { MyserviceService, alertDetails } from '../myservice.service';
import { AckcarouselComponent } from '../ackcarousel/ackcarousel.component'

@Component({
  selector: 'app-ackment',
  templateUrl: './ackment.component.html',
  styleUrls: ['./ackment.component.css']
})
export class AckmentComponent implements OnInit {

  getalertdetailsData={
    "drvusername":"abc"

  };

  @ViewChild(AckcarouselComponent)
  private ackmntc: AckcarouselComponent;	

  constructor(private myservice: MyserviceService) {

 
    
   }

  

  ngOnInit() {

  }

  getAlertDetails(){

      this.myservice.getalertdetails(()=>{

          this.getalertdetailsData=this.myservice.getalertdetailsData[0];
          this.ackmntc.updateCarouselData();
      //    console.log(this.getalertdetailsData);

      })

  }

  ngAfterViewInit() {
    //console.log("heello view init");
    //console.log($("#mapsId").height());
    console.log($(window).height())
    let mapsheight=$(window).height()-$(".nav-tabs").height();
    console.log(mapsheight)
    $('.ackmnt').css("height",mapsheight-5);
  }


}
