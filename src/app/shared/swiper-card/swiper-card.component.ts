import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle';
import { CardModule } from '../card/card.component';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-swiper-card',
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.scss']
})
export class SwiperCardComponent {
  @Input() elements:any = [];
  env=environment;

  constructor (private router:Router) {}
  apriElemento(id:string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['film', id])
    });
  }
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
declarations: [SwiperCardComponent],
imports: [CommonModule, CardModule],
exports: [SwiperCardComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class SwiperCardModule {}
