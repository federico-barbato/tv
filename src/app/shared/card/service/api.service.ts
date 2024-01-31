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
          resolve(data.results);
        }else{
          reject(data);
        }
      });
    });
  }
}