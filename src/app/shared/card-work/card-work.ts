import { Component,Input } from '@angular/core';
import { WorkItem } from '../../models/work-item.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-work',
  imports: [],
  templateUrl: './card-work.html',
  styleUrl: './card-work.scss',
})
export class CardWork {
  @Input() data: WorkItem[] = [];
  constructor(private router: Router) {}

  viewDetails(id: number): void {
    this.router.navigate(['/work-details', id]);
  }
}
