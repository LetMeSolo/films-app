export interface IType {
  value: string,
  viewValue: string
}

export interface IFilmPreview {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string
}

export interface IFilmsResponse {
  Response: string,
  Search: IFilmPreview[],
  totalResults: string
}

export interface IFilm {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: [
    {
      Source: string,
      Value: string
    },
    {
      Source: string,
      Value: string
    },
    {
      Source: string,
      Value: string
    }
  ],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: string
}

export interface IFilmItem {
  Poster:string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string
}


