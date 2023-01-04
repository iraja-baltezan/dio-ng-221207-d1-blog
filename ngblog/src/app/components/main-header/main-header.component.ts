import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  isMainMenuButtonActived: boolean = false;

  onMainMenuButtonClick(): void {
    this.isMainMenuButtonActived = !this.isMainMenuButtonActived;
  }

  onMainNavItemClick(): void {
    this.isMainMenuButtonActived = false;
  }
}
