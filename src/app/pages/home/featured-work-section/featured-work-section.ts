import { Component } from '@angular/core';
import { WorkItem } from '../../../models/work-item.model';
import { WORK_ITEMS } from '../../../data/work-items.data';
import { CardWork } from '../../../shared/card-work/card-work';

@Component({
  selector: 'app-featured-work-section',
  imports: [CardWork],
  templateUrl: './featured-work-section.html',
  styleUrl: './featured-work-section.scss',
})
export class FeaturedWorkSection {
featuredWorks: WorkItem[] = WORK_ITEMS;
}
