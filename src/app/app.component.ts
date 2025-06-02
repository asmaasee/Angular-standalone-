import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/main/sidepart/shared/header/header.component';
import { AsideComponent } from './pages/main/sidepart/shared/aside/side.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AsideComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  })
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
