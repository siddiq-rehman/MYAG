import { Component, OnInit, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations'; 
import * as $ from 'jquery';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css'],
  animations: [
   trigger('myanime',[
    state('smaller',style({
      width:'20%',
     
    })),
    state('larger',style({
      width:'100%'
    })),
    transition('smaller <=> larger',animate('1000ms linear'))
 ]),
 trigger('myanime1',[
  state('bsmaller',style({
    display:'none',
    transform: 'translateX(100%)'
   
  })),
  state('blarger',style({
    'display':'inline-block',
    'white-space':'nowrap',
    transform: 'translateX(-100%)'
  })),
  transition('bsmaller <=> blarger',animate('1000ms linear'))
])


  ]
})
export class FirstcompComponent implements OnInit {

  constructor(private router: Router) { 
    this.router= router;
    let map;
  }

  title: string = 'My first AGM project';
  mlat: number = 12.971;
  mlng: number = 77.594;
  customzoom: number=16;
  locationChoseen=true;
  resize=0;

  mapStyles = [
    {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
      ]
    }
  ];

  labelOptions = {
    color: '#CC0000',
    fontFamily: '',
    fontSize: '20px',
    fontWeight: 'bold',
    text: '12',
    }

  locations=[
{
  lat: 12.971564573512463,
  lng: 77.59363521957403,
  url: '/assets/Green.png',
  label: 'R2'
},
{
  lat: 12.971460022958762,
  lng: 77.59676803970342,
  url: '/assets/Red.png',
  label: 'R24'
},
{lat: 12.971146371033683, lng: 77.59595264816289, 
  url: '/assets/Red.png',
  label: 'R34'
}

  ]

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

 onClickEvent(event){

  
  this.state = (this.state === 'smaller' ? 'larger' : 'smaller');
  this.state2 = (this.state2 === 'bsmaller' ? 'blarger' : 'bsmaller');
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize')); //most important line
    console.log("hiiiii")
   // console.log("on click",lat,lng,index);
    this.mlat=event.coords.lat;
    this.mlng=event.coords.lng;
   // element.classList.remove("fading");
    //melement.classList.remove("")
  },1000);

 }

 clickedMarker(lat,lng,index){
    console.log("on clickede",lat,lng,index);
    this.state = 'smaller'
    this.state2 = 'blarger'
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize')); //most important line
      console.log("hiiiii")
      console.log("on click",lat,lng,index);
      this.mlat=lat;
      this.mlng=lng;
     
     // element.classList.remove("fading");
      //melement.classList.remove("")
    },1000);


  
  

  }

  onIdle1(e){
    //console.log(e);
    
  }



  ngAfterViewInit() {
      //console.log("heello view init");
      //console.log($("#mapsId").height());
      let mapsheight=$(window).height()-$(".nav-tabs").height();
      console.log(mapsheight)
    
      $('.agm-map-container-inner').css("height",mapsheight-5);
      
      
    }

   
    state: string = 'larger';
    state2: string = 'bsmaller';
    
      animateMe() {
            this.state = (this.state === 'smaller' ? 'larger' : 'smaller');
         
         //  $("#myp").animate({ // id of your animated object
           // "display": "block",
           // "margin-top": "-82%",
           // "left": "80%"
          //}, 5000); // time animation should take
      }

 

}
