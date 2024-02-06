import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CardModule } from "../card/card.component";
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { CardDettaglioModule, Dettaglio } from "../card-dettaglio/card-dettaglio.component";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  elements: any = [];
  loading: boolean = false;
  tipo: string = 'film';
  page: number = 0;
  elementiDettaglio: Dettaglio | any = null;


  constructor(private apiService: ApiService) { }

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
      this.elements = await this.apiService.listaFilms(this.page + '');
      // FINE CARICAMENTO
      this.loading = false;
    }
  }

  async openDettaglio(id: string) {
    this.elementiDettaglio = await this.apiService.dettaglioFilm(id);
  }
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
  declarations: [CatalogoComponent],
  exports: [CatalogoComponent],
  imports: [CommonModule, CardModule, CardDettaglioModule]
})
export class CatalogoModule { }