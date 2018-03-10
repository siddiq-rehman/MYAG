import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reportdetail',
  templateUrl: './reportdetail.component.html',
  styleUrls: ['./reportdetail.component.css']
})
export class ReportdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
      let mapsheight=$(window).height()-$(".nav-tabs").height()-$(".repHeader").outerHeight();
      console.log(mapsheight)
     // $('app-filter').css("height",mapsheight)
      $('.reportDetail').css("height",mapsheight)
    }

}
