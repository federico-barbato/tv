import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-card-dettaglio',
  templateUrl: './card-dettaglio.component.html',
  styleUrls: ['./card-dettaglio.component.scss']
})
export class CardDettaglioComponent {
  
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
