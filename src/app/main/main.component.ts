import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReportdetailComponent } from '../reportdetail/reportdetail.component';
import { AckcarouselComponent } from '../ackcarousel/ackcarousel.component';
import * as $ from 'jquery';
import { MyserviceService, alertDetails } from '../myservice.service';
import { FirstcompComponent } from '../firstcomp/firstcomp.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


 

  constructor() {

   
 
    
  }




  


  title = 'app';
  myfuc(){
    
  }

  repclick(event){


   

    $(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
    });

  }

  ngOnInit() {
   
  }

}
