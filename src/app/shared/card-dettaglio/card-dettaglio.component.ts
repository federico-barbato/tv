import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-dettaglio',
  templateUrl: './card-dettaglio.component.html',
  styleUrls: ['./card-dettaglio.component.scss']
})
export class CardDettaglioComponent {
  @Input() dettaglio: Dettaglio | any = null;

  constructor (private router: Router){};
  apriElemento(id:string) {
    this.router.navigate(['film', id]);    
  }

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
