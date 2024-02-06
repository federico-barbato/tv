import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = environment.apiUrl;
  apiKey: string = '?api_key=' + environment.apiKey;
  apiLang: string = '&language=it';

  constructor(private http: HttpClient) { }

  // CHIAMATA API PER RICEVERE ARRAY CONTENTE I FILM POPOLARI DEL MOMENTO 
  listaFilms(page: string = '1') {
    return new Promise((resolve, reject) => {
      const url = this.apiUrl + 'movie/popular' + this.apiKey + this.apiLang + '&page=' + page;
      this.http.get(url).subscribe((data:any) => {
        if(data){
          const elements: any = [];

          data.results.forEach((el:any) => {
            elements.push({
              id: el.id,
              titolo: el.title,
              image: environment.imageUrl+'w200'+el.poster_path
            });
          });
          resolve(elements);
        }else{
          reject(data);
        }
      });
    });
  }

   // CHIAMATA API PER RICEVERE ARRAY CONTENTE I DETTAGLI DEL FILM SELEZIONATO TRAMITE ID
   dettaglioFilm(id: string) {
    return new Promise((resolve, reject) => {
      const url = this.apiUrl + 'movie/' + id + this.apiKey + this.apiLang;
      this.http.get(url).subscribe((data:any) => {
        if(data){
          resolve( {
              titolo: data.title,
              descrizione: data.overview,
              image: environment.imageUrl+ 'w200' + data.poster_path,
              imageDettaglio: environment.imageUrl+ 'w300' + data.poster_path,
              id: data.id,
            });
        }else{
          reject(data);
        }
      });
    });
  }

  // CHIAMATA API PER RICEVERE ARRAY CONTENTE IL CAST DEL FILM SELEZIONATO TRAMITE ID
  listaCast(id: string) {
    return new Promise((resolve, reject) => {
      // https://api.themoviedb.org/3/movie/787699/credits?language=en-US
      const url = this.apiUrl + 'movie/'+ id + '/credits' + this.apiKey + this.apiLang;
      this.http.get(url).subscribe((data:any) => {
        if(data){
          resolve(data.cast);
        }else{
          reject(data);
        }
      });
    });
  }

  // CHIAMATA API PER RICEVERE ARRAY CONTENTE IL CAST DEL FILM SELEZIONATO TRAMITE ID
  similarFilm(id:string){
    return new Promise((resolve, reject) => {
      const url = this.apiUrl + 'movie/'+ id + '/similar' + this.apiKey + this.apiLang;
      this.http.get(url).subscribe((data:any) => {
        if(data){
          const elements: any = [];

          data.results.forEach((el:any) => {
            elements.push({
              id: el.id,
              titolo: el.title,
              image: environment.imageUrl+'w200'+el.poster_path
            });
          });
          resolve(elements);
        }else{
          reject(data);
        }
      });
    });
  } 

  // CHIAMATA API PER RICEVERE ARRAY CONTENTE I DETTAGLI DEL TELEFILM SELEZIONATO TRAMITE ID
  dettaglioTelefilm(id: string) {
    return new Promise((resolve, reject) => {
      const url = this.apiUrl + 'tv/' + id + this.apiKey + this.apiLang;
      this.http.get(url).subscribe((data:any) => {
        if(data){
          resolve( {
              titolo: data.title,
              descrizione: data.overview,
              image: environment.imageUrl + data.poster_path,
              id: data.id,
            });
        }else{
          reject(data);
        }
      });
    });
  }
}