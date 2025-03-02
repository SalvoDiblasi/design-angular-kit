import { Component } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-group',
  templateUrl: './chips-group.component.html',
  standalone: false,
})
export class ChipsGroupComponent {
  el = {
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true,
  };

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

  close(value: string): void {
    this.el[value] = false;
  }
}
