import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { HeaderModule } from "../../shared/header/header.component";
import { CardModule } from "../../shared/card/card.component";
import { ApiService } from 'src/app/shared/card/service/api.service';
import { CatalogoModule } from "../../shared/catalogo/catalogo.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  elements: any =[];
  loading: boolean = false;
  tipo: string = 'film';
  page: number = 0;


 constructor (private apiService: ApiService) {}

 ngOnInit(): void {
  // CHIAMATA DELLA FUNZIONE PER IL CARICAMENTO "INFINITO" DELLA LISTA FILM 
  this.caricaAltro();
  // CONTROLLO SCROLL DELL'UTENTE : QUANDO ARRIVA VICINO ALLA FINE DELLA PAGINA CARICA ALTRI ARTICOLI  
  document.addEventListener('scroll', (event) => {
    if (window.scrollY + window.outerHeight >= document.body.scrollHeight) {
      // SISTEMA DI CONTROLLO PER EVITARE CHE I CARICAMENTI SI SOVRAPPONGANO 
      if (this.loading == false) this.caricaAltro();
    }
  })
}
// FUNZIONE CARICAMENTO "INFINITO" DELLA LISTA FILM 
async caricaAltro() {
  // INIZIO CARICAMENTO 
  this.loading = true;
  this.page++;

  if (this.tipo == 'film') {
    // CHIAMATA API ESTERNA 
    const results: any = await this.apiService.listaFilms(this.page + '');
    for (let i = 0; i < results.length; i++) {
      // PUSH NECESSARIO PER INSERIRE I VALORI UNO AD UNO ALL'INTERNO DELL'ARRAY 
      this.elements.push(results[i]);
    }
    // FINE CARICAMENTO
    this.loading = false;
  }
}
}


/*================================================================
# MODULE
================================================================*/
@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [CommonModule, HeaderModule, CardModule, CatalogoModule]
})
export class HomeModule {}
