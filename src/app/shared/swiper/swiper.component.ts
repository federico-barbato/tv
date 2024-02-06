import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent {
  @Input() elements:any = [];
  env=environment;
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
declarations: [SwiperComponent],
imports: [CommonModule],
exports: [SwiperComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class SwiperModule {}
