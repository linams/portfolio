import { Component } from '@angular/core';
import { CardWork } from '../../shared/card-work/card-work';
import { WorkItem } from '../../models/work-item.model';
import { WORK_ITEMS } from '../../data/work-items.data';

@Component({
  selector: 'app-workpage',
  imports: [CardWork],
  templateUrl: './workpage.html',
  styleUrl: './workpage.scss',
})
export class Workpage {
  Work : WorkItem[]=WORK_ITEMS;
}
