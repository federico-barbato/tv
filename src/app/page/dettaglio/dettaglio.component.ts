import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent {

}

/*================================================================
# MODULE
================================================================*/
@NgModule({
declarations: [DettaglioComponent],
imports: [CommonModule],
exports: [DettaglioComponent],

})
export class DettaglioModule {}
