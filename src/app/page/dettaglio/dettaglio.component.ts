import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { HeaderModule } from "../../shared/header/header.component";
import { SwiperModule } from "../../shared/swiper/swiper.component";
import { SwiperCardModule } from "../../shared/swiper-card/swiper-card.component";

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {
  el: any = null;
  similar: any = null;
  id: string = this.route.snapshot.paramMap.get('id') || '';
  
  constructor(private route: ActivatedRoute, private apiService:ApiService) {}

  async ngOnInit() {
    this.el = await this.apiService.dettaglioFilm(this.id)

    this.el.cast = await this.apiService.listaCast(this.id) || [];
    // console.log(this.el);

    this.el.similar = await this.apiService.similarFilm(this.id) || [];
    console.log(this.el);
  }
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
    declarations: [DettaglioComponent],
    exports: [DettaglioComponent],
    imports: [CommonModule, HeaderModule, SwiperModule, SwiperCardModule]
})
export class DettaglioModule {}
