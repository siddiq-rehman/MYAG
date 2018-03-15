import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-ackment',
  templateUrl: './ackment.component.html',
  styleUrls: ['./ackment.component.css']
})
export class AckmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
