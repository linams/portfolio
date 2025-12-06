import { Component } from '@angular/core';
import { CardPost } from '../../shared/card-post/card-post';
import { BlogPost } from '../../models/blog-post.model';
import { BLOG_POSTS } from '../../data/blog-posts.data';

@Component({
  selector: 'app-blogspage',
  imports: [CardPost],
  templateUrl: './blogspage.html',
  styleUrl: './blogspage.scss',
})
export class Blogspage {
BlogPosts : BlogPost[]= BLOG_POSTS;
}
