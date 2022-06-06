import {Component, Input, OnInit} from '@angular/core';
import {IFilm} from "../../shared/model/films-app.module";

@Component({
  selector: 'app-film-description',
  templateUrl: './film-description.component.html',
  styleUrls: ['./film-description.component.scss']
})
export class FilmDescriptionComponent implements OnInit {

  @Input() filmDescription!: IFilm;

  constructor() { }

  ngOnInit(): void {
  }



}
