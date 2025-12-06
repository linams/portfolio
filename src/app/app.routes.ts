// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Blogspage } from './pages/blogspage/blogspage';
import { Workpage } from './pages/workpage/workpage';


export const routes: Routes = [{
  path: '', 
  component: Home
  },
  { 
    path: 'blog', 
    component:Blogspage
  },
  { 
    path: 'works', 
    component:Workpage
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];