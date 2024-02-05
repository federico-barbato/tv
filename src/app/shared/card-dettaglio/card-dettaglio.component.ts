import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-card-dettaglio',
  templateUrl: './card-dettaglio.component.html',
  styleUrls: ['./card-dettaglio.component.scss']
})
export class CardDettaglioComponent {
  @Input() dettaglio: Dettaglio | any = null;
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
declarations: [CardDettaglioComponent],
imports: [CommonModule],
exports: [CardDettaglioComponent],

})
export class CardDettaglioModule {}

export interface Dettaglio {
  titolo: string;
  descrizione: string;
  image: string;
}
