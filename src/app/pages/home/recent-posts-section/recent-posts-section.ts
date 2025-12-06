import { Component } from '@angular/core';
import { CardPost } from '../../../shared/card-post/card-post';
import { BlogPost } from '../../../models/blog-post.model';
import { BLOG_POSTS } from '../../../data/blog-posts.data';

@Component({
  selector: 'app-recent-posts-section',
  imports: [CardPost],
  templateUrl: './recent-posts-section.html',
  styleUrl: './recent-posts-section.scss',
})
export class RecentPostsSection {
   recentPosts: BlogPost[] = BLOG_POSTS;
}
