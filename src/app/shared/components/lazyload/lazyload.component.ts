import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyload',
  templateUrl: './lazyload.component.html'
})
export class LazyloadComponent implements OnInit {

  @Input()
  alt: string ="";
  @Input()
  src: string = "";
  public load: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onLoad():void{
    setTimeout(() => {
      this.load = true
    }, 1000);
  }


}
