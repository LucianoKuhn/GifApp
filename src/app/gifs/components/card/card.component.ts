import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  public gif!: Gif;

}
