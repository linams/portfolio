import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardWork } from "./shared/card-work/card-work";
import { WorkItem } from './models/work-item.model';
import { WORK_ITEMS } from './data/work-items.data';
import { BlogPost } from './models/blog-post.model';
import { BLOG_POSTS } from './data/blog-posts.data';
import { CardPost } from "./shared/card-post/card-post";
import { Home } from "./pages/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardWork, CardPost, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('task');

}
