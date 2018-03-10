import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
  }

  clickfun(){
    console.log("click me");
    console.log("from data", document.getElementById(""))
  }
  

  ngAfterViewInit() {
  
    let mapsheight=$(window).height()-$(".nav-tabs").height()-$(".repHeader").outerHeight();
    console.log(mapsheight)
   // $('app-filter').css("height",mapsheight)
    $('.filterdet').css("height",mapsheight-20)

    $.getScript('/assets/datepick.js');





    
  }

}
