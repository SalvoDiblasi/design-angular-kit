import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-modal-index',
  templateUrl: './modal-index.component.html',
  standalone: false,
})
export class ModalIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItModalComponent');
  }
}
