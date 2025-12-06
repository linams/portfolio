import { Component,Input } from '@angular/core';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'app-card-post',
  imports: [],
  templateUrl: './card-post.html',
  styleUrl: './card-post.scss',
})
export class CardPost {
 @Input() post: BlogPost[]=[];
}
