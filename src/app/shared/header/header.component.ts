import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpened : boolean = false;

  constructor (
    public router: Router
  ) {}

  getMenu(): any[] {
    const menu = this.router.config;
    console.log  (menu);
    return menu;
  }
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule],
  exports: [HeaderComponent],

})
export class HeaderModule {}