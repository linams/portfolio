import { Component } from '@angular/core';
import { Herosection } from './herosection/herosection';
import { FeaturedWorkSection } from './featured-work-section/featured-work-section';
import { RecentPostsSection } from './recent-posts-section/recent-posts-section';

@Component({
  selector: 'app-home',
  imports: [Herosection,FeaturedWorkSection,RecentPostsSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
