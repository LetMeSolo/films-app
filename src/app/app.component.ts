import {Component, OnInit} from '@angular/core';
import {FilmsService} from "./shared/service/films.service";
import {IFilm, IFilmPreview, IFilmsResponse, IType} from "./shared/model/films-app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  typeSelect: IType[] = [
    {value: "movie", viewValue: "Movie"},
    {value: "series", viewValue: "Series"},
    {value: "episode", viewValue: "Episode"}
  ];

  titleFilm: string = '';
  inputValue: string = '';

  selectType: string = '';
  selectValue: string = '';

  filmsResponse!: IFilmsResponse;
  filmArray: IFilmPreview[] = [];

  filmDescription!: IFilm;
  isDescriptionVisible: boolean = true;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
  }

  getFilms(): void { //вывод фильмов по названию
    this.getFilmTitle();
    this.filmsService.getListFilms(this.titleFilm, this.selectType).subscribe((filmsResponse: IFilmsResponse) => {
      this.filmsResponse = filmsResponse;
      this.filmArray = filmsResponse.Search;
    });
  }

  getFilmTitle() { //Получение название фильма из инпута
    if(this.inputValue === '' || this.selectValue === '') {
      return alert('Enter movie title and type!');
    }else {
      this.titleFilm = this.inputValue;
      this.selectType = this.selectValue;
    }
  }

  getDiscription(imdbID: string) {
    this.filmsService.getDescriptionFilmById(imdbID).subscribe((filmDescription: IFilm) => {
      this.filmDescription = filmDescription;
    });
    this.isDescriptionVisible = true;
  }

  closeDescription() {
    this.isDescriptionVisible = false;
  }

}
