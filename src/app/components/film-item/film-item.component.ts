import {Component, Input, OnInit} from '@angular/core';
import {IFilm, IFilmItem, IFilmPreview, IFilmsResponse} from "../../shared/model/films-app.module";

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() filmArray!: IFilmPreview[];


  constructor() { }

  ngOnInit(): void {
  }

}
