import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'it-navbar-item',
  templateUrl: './navbar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItNavBarItemComponent {}
