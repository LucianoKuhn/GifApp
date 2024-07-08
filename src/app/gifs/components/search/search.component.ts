import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>
  
  constructor(private gifsService: GifsService) { }

  ngOnInit() {
  }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";
  }

}
