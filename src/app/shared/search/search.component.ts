import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('inputSearch') inputSearch: any; 

  @Output() eventClick = new EventEmitter();

  cerca() {
    const input = this.inputSearch.nativeElement.value;
    this.eventClick.emit(input);
  }
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
declarations: [SearchComponent],
imports: [CommonModule],
exports: [SearchComponent],

})
export class SearchModule {}
