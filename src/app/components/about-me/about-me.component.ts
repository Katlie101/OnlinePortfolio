import { Component } from '@angular/core';
import { PortfolioPageComponent } from '../portfolio-page/portfolio-page.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [PortfolioPageComponent, RouterLink],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})

export class AboutMeComponent {
}
