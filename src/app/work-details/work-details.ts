import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkItem } from '../models/work-item.model';
import { WORK_ITEMS } from '../data/work-items.data';

@Component({
  selector: 'app-work-details',
  imports: [CommonModule],
  templateUrl: './work-details.html',
  styleUrl: './work-details.scss',
})
export class WorkDetails implements OnInit {
  workItem: WorkItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.workItem = WORK_ITEMS.find(item => item.id === id);
    
    if (!this.workItem) {
      
      this.router.navigate(['/works']);
    }
  }
}
