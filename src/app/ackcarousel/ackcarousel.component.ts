import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-ackcarousel',
  templateUrl: './ackcarousel.component.html',
  styleUrls: ['./ackcarousel.component.css']
})
export class AckcarouselComponent implements OnInit {

  slideIndex :any= 1;

  constructor() {
   }

   showSlides(n) {
    //console.log("hello");
     var i;
     var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;;
     var dots = document.getElementsByClassName("dot");
     if (n > slides.length) {this.slideIndex = 1}    
     if (n < 1) {this.slideIndex = slides.length}
    // console.log(slides.length);
     for (i = 0; i < slides.length; i++) {
       //console.log(slides[i]);
       //console.log("here");
       //console.log(slides[i]);
         slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     //console.log(slides[slideIndex-1])
     //console.log("second");
     slides[this.slideIndex-1].style.display = "block";  
     dots[this.slideIndex-1].className += " active";
   }

  plusSlides(n) {
    //console.log("hereer")
    this.showSlides(this.slideIndex += n);
  }
  
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }



  
  ngOnInit() {
   
  }

  ngAfterViewInit() {
   // plusSlides(11);
   this.showSlides(this.slideIndex);
  }

}
