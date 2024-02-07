import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { HeaderModule } from "../../shared/header/header.component";
import { CardModule } from "../../shared/card/card.component";
import { ApiService } from 'src/app/shared/service/api.service';
import { CatalogoModule } from "../../shared/catalogo/catalogo.component";
import { SwiperCardModule } from "../../shared/swiper-card/swiper-card.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  elements:any = [];

  constructor (private apiService:ApiService) {}

  async ngOnInit() {
    this.elements = await this.apiService.trendingFilms();
  }

}


/*================================================================
# MODULE
================================================================*/
@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [CommonModule, HeaderModule, CardModule, CatalogoModule, SwiperCardModule]
})
export class HomeModule { }
