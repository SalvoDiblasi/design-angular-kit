import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'it-icon-example',
  templateUrl: './icon-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IconExampleComponent {
  exampleText: string = '<it-icon name="tool"></it-icon>';
}
