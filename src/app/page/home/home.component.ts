import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { HeaderModule } from "../../shared/header/header.component";
import { CardModule } from "../../shared/card/card.component";
import { ApiService } from 'src/app/shared/service/api.service';
import { CatalogoModule } from "../../shared/catalogo/catalogo.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}


/*================================================================
# MODULE
================================================================*/
@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, HeaderModule, CardModule, CatalogoModule]
})
export class HomeModule { }
