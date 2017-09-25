import { Injectable } from '@angular/core';

@Injectable()
export class TacoService {

  constructor() { }

  loadScript() {
    document.addEventListener('DOMContentLoaded', function(){
      var wrapper = document.getElementById('wrapper');
      var topLayer = <HTMLElement>wrapper.querySelector('.top');
      var handle = <HTMLElement>wrapper.querySelector('.handle');
      var skew = 0;
      var delta = 0;

      if(wrapper.className.indexOf('skewed') != -1){
        skew = 1000;
      }
      
      wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = e.clientX + delta + 'px';
        topLayer.style.width= e.clientX + skew + delta + 'px';
      });
    });
  }

}
