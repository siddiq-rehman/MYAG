import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reportscomp',
  templateUrl: './reportscomp.component.html',
  styleUrls: ['./reportscomp.component.css']
})
export class ReportscompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("reeports");
    //console.log("heello view init");
    //console.log($("#mapsId").height());
   // let mapsheight=$(".repHeader").outerHeight()+$(".filter").height();
    //console.log(mapsheight)
    //$('.reports').css("height",mapsheight)
  }

}
