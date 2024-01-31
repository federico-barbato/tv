import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  env = environment;
  @Input() element: any= null;
}


/*================================================================
# MODULE
================================================================*/
@NgModule({
	declarations: [CardComponent],
	imports: [CommonModule],
  exports: [CardComponent],

})
export class CardModule {}