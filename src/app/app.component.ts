import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vimukti-Phat';

  constructor () {

    
  }



  /* Or with jQuery

  var instance = M.Carousel.init({
      fullWidth: true,
      indicators: true
    });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });/*

  /* Parallax

  AppComponent.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  }); */
}
