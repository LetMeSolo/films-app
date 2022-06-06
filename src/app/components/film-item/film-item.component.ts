import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFilmPreview} from "../../shared/model/films-app.module";

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() filmArray!: IFilmPreview;

  @Output() pageFilmInfo = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  getDiscription(imdbID: string) {
    this.pageFilmInfo.emit();
  }

}
