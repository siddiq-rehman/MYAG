import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { ReportdetailComponent } from '../reportdetail/reportdetail.component';

@Component({
  selector: 'app-reportscomp',
  templateUrl: './reportscomp.component.html',
  styleUrls: ['./reportscomp.component.css']
})
export class ReportscompComponent implements OnInit {

  @ViewChild(ReportdetailComponent)
  reff :ReportdetailComponent;

  constructor() { }

  ngOnInit() {
    console.log("hello")
  }

  ngAfterViewInit() {
    //console.log("reeports");
    //console.log("ref",this.reff)
    //console.log("heello view init");
    //console.log($("#mapsId").height());
   // let mapsheight=$(".repHeader").outerHeight()+$(".filter").height();
    //console.log(mapsheight)
    //$('.reports').css("height",mapsheight)
  }

}
