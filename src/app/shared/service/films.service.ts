import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {IFilm, IFilmsResponse} from "../model/films-app.module";

const API_URL = "https://www.omdbapi.com";
const API_KEY = "236cec3f";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  @Input() titleFilm!: string;
  // @Input() filmID!: string;

  constructor(private http: HttpClient) { }

  getListFilms(titleFilm: string, selectType: string): Observable<IFilmsResponse> {
    return this.http.get<IFilmsResponse>(`${API_URL}/?apikey=${API_KEY}&s=${titleFilm}&type=${selectType}`);
  }

  getDescriptionFilmById(imdbID: string): Observable<IFilm> {
    return this.http.get<IFilm>(`${API_URL}/?apikey=${API_KEY}&i=${imdbID}`);
  }

}


