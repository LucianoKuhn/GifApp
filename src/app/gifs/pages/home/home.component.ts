import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'gifs-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit() {
  }
  get gifs():Gif[]{
    return this.gifsService.gifsList;
  }
  

}
