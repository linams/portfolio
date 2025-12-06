// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'John - Portfolio' },
  { path: 'blog', component: BlogComponent, title: 'Blog - John' },
  { path: 'work', component: WorkComponent, title: 'Work - John' },
  { path: '**', redirectTo: '' }
];