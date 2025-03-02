import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-chip-index',
  templateUrl: './chip-index.component.html',
  standalone: false,
})
export class ChipIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItChipComponent');
  }
}
