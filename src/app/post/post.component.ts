import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  public articles: any = [];
  ngOnInit(): void {
    this.postsService.getPost;
    this.postsService.getPost().subscribe(article=>{
      this.articles = article
      console.log(this.articles);
    })
  }

}
