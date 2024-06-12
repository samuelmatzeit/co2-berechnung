import { Component } from '@angular/core';
import { InfoCardsComponent } from '../info-cards/info-cards.component';
import { HeroComponent } from '../hero/hero.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [InfoCardsComponent, RouterModule, HeaderComponent, HeroComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent { }
