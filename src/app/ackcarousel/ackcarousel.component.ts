import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MyserviceService, alertDetails } from '../myservice.service';

@Component({
  selector: 'app-ackcarousel',
  templateUrl: './ackcarousel.component.html',
  styleUrls: ['./ackcarousel.component.css']
})
export class AckcarouselComponent implements OnInit {

  slideIndex :any= 1;

  carouselDataArray=[]

  constructor(private myservice: MyserviceService) {
   }

   showSlides(n) {
    //console.log("hello");
//    debugger;
     var i;
     var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    // console.log(slides);
     var dots = document.getElementsByClassName("dot");
     //console.log(dots);
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
    console.log("current slide",n);
    this.showSlides(this.slideIndex = n);
  }



  
  ngOnInit() {
   
  }

  ngAfterViewInit() {
   // plusSlides(11);
  // this.showSlides(this.slideIndex);
  }



  updateCarouselData(){
      console.log("Updating your carousel data")
      this.carouselDataArray=this.myservice.getalertdetailsData;
      console.log("my ackdatta",this.carouselDataArray)
     // this.showSlides(this.slideIndex);
     console.log("updateCarouselData")
     setTimeout(()=>{
      this.showSlides(this.slideIndex);
    }, 0);

  }







}
