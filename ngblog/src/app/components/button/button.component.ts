import { Component, Input } from '@angular/core';

// type TRouterLinkParam = string | number | object;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  // @Input()
  // routerLink?: string | TRouterLinkParam[] | null;

  @Input()
  disabled: boolean = false;

  @Input()
  type: string = 'link';

  @Input()
  iconSrc?: string;


}
