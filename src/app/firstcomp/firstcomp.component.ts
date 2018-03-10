import { Component, OnInit, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router'; 
import * as $ from 'jquery';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {

  constructor(private router: Router) { 
    this.router= router;
    let map;
  }

  title: string = 'My first AGM project';
  lat: number = 12.971;
  lng: number = 77.594
  customzoom: number=16;
  locationChoseen=true;
  resize=0;

  ngOnInit() {
    if(this.resize==1){
     
    this.resize=0;
    }
  }
  centerChange(e){
    console.log("ceentetr change",e);
   // this.lat=e.lat;
   // this.lng=e.lng;
  }
 cb(){
   console.log("heello bro");
 }


 @HostListener('window:resize')
 onWindowResize() {
   console.log("resize");
 }

  onClickEvent(m){
    console.log("on clickede",m);
    var melement = document.getElementById("ackc");
    melement.classList.add("slide2");
    var element = document.getElementById("mapsId");
    element.classList.add("fading");
    $('#mapsId').css("width","20%");
    $('#mapsId').css("display","inline-block")
    
    setTimeout(()=>{
    window.dispatchEvent(new Event('resize')); //most important line
    this.lat=m.coords.lat;
    this.lng=m.coords.lng;
    //element.classList.remove("fading");
    //melement.classList.remove("")
  },750); //added because the effeect should be produced after fading

  }

  onIdle1(e){
    //console.log(e);
    
  }



  ngAfterViewInit() {
      //console.log("heello view init");
      //console.log($("#mapsId").height());
      let mapsheight=$(window).height()-$(".nav-tabs").height();
      //console.log(mapsheight)
      $('.agm-map-container-inner').css("height",mapsheight)
    }

   


 

}
