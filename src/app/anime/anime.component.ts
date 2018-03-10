import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            display:"none"
           
        })),
        state('large', style({
          width: '80%',
          display:"inline-block"
           
        })),
        transition('small => large', animate('1000ms ease-in')),
    ]),
  ]
})
export class AnimeComponent implements OnInit {

  state: string = 'small';
  
    animateMe() {
          this.state = (this.state === 'small' ? 'large' : 'small');
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
