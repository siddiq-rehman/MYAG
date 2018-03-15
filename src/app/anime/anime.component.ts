import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
  animations: [
    trigger('myanimation',[
      state('smaller',style({
         transform : 'translateY(100px)'
      })),
      state('larger',style({
         transform : 'translateY(0px)'
      })),
      transition('smaller <=> larger',animate('1000ms ease-in'))
   ]),
   trigger('myanime',[
    state('smaller',style({
     display:"none",
     
    })),
    state('larger',style({
      display:"inline-block",
    })),
    transition('smaller <=> larger',animate('1000ms ease-in'))
 ])

  ]
})
export class AnimeComponent implements OnInit {

  state: string = 'larger';
  state1: string = 'basic';
  state2: string = 'smaller';
  
    animateMe() {
          this.state = (this.state === 'smaller' ? 'larger' : 'smaller');
          this.state2 = (this.state2 === 'smaller' ? 'larger' : 'smaller');
       //  $("#myp").animate({ // id of your animated object
         // "display": "block",
         // "margin-top": "-82%",
         // "left": "80%"
        //}, 5000); // time animation should take
    }
  constructor() { }

  ngOnInit() {
  }

}
