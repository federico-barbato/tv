import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DettaglioComponent } from './page/dettaglio/dettaglio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { name: 'HOME', },
  },
  {
    path: 'film/:id',
    component: DettaglioComponent,
    data: { name: 'DETTAGLIO', hide: true }
  },
  {
    path: 'film',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
