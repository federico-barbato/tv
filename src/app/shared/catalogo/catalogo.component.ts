import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { CardModule } from "../card/card.component";
import { ApiService } from '../card/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {


  @Input() elements: any = [];
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
  declarations: [CatalogoComponent],
  exports: [CatalogoComponent],
  imports: [CommonModule, CardModule]
})
export class CatalogoModule { }