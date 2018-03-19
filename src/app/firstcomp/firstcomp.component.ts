import { Component, OnInit, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations'; 
import * as $ from 'jquery';
import { MyserviceService } from '../myservice.service';
import { AckmentComponent } from '../ackment/ackment.component'


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
    transition('smaller <=> larger',animate('700ms linear'))
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
  transition('bsmaller <=> blarger',animate('700ms linear'))
])


  ]
})

export class FirstcompComponent implements OnInit {

  @ViewChild(AckmentComponent)
    private ackmntc: AckmentComponent;	

  constructor(private router: Router, private myservice: MyserviceService) { 
    this.router= router;
    let map;
    
  }

  title: string = 'My first AGM project';
  mlat: number = 12.93472;
  mlng: number = 77.7104;
  customzoom: number=16;
  locationChoseen=true;
  resize=0;
  tempArr;

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

  locations=[]  // Array of markers


  myReplace(arr1,arr2){
    arr1.forEach((data,i)=>{		
      arr2.forEach((data1,j)=>{
        if(data.label===data1.label){
          if(data.lat !== data1.lat ||  data.lng !== data1.lng || data.url!== data1.url){
            arr1[i]=arr2[j]	
          }
        }
      })
    })
    return arr1;
  }

  objIndexOf(arr,key,value){
    let exist=0
    arr.forEach((data)=>{
      if(data[key]==value){
        exist= 1
      }
    })
  return exist;	
  }
  




  ngOnInit() {
  let TempLocations;
  let myReplace=this.myReplace;
  let objIndexOf=this.objIndexOf
  TempLocations=this.locations;
  let cb=()=>{
    if(typeof this.myservice.httpdata != 'undefined')
    {
      TempLocations=this.locations;
      this.tempArr= this.myservice.httpdata.filter(function(obj) { 
       return objIndexOf(TempLocations,'label',obj.label) !== 1; 
        });
      
        this.tempArr.forEach((data)=>{
          TempLocations.push(data)    
        })
      this.locations= myReplace(TempLocations,this.myservice.httpdata);
    //  console.log(this.locations);
    }
  }
  this.myservice.cb=cb;
  setInterval(()=>{    
    this.myservice.getAlertFunc();
  },2000)
  }


  centerChange(e){
   // console.log("ceentetr change",e);
   // this.lat=e.lat;
   // this.lng=e.lng;
  }



 @HostListener('window:resize')
 onWindowResize() {
  // console.log("resize");
 }

 onClickEvent(event){
  this.state =  'larger' 
  this.state2 = 'bsmaller' 
  
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize')); //most important line
   // console.log("hiiiii")
   // console.log("on click",lat,lng,index);
    this.mlat=event.coords.lat;
    this.mlng=event.coords.lng;
   // element.classList.remove("fading");
    //melement.classList.remove("")
  },700);

 }

 clickedMarker(lat,lng,index){
   // console.log("on clickede",lat,lng,index);
    this.state = 'smaller'
    this.state2 = 'blarger'
    this.ackmntc.getAlertDetails();
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize')); //most important line
     // console.log("hiiiii")
     // console.log("on click",lat,lng,index);
      this.mlat=lat;
      this.mlng=lng;
     
     // element.classList.remove("fading");
      //melement.classList.remove("")
    },700);


  
  

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
