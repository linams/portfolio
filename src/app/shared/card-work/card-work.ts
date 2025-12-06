import { Component,Input } from '@angular/core';
import { WorkItem } from '../../models/work-item.model';
@Component({
  selector: 'app-card-work',
  imports: [],
  templateUrl: './card-work.html',
  styleUrl: './card-work.scss',
})
export class CardWork {
  @Input() data: WorkItem[] = [];
}
