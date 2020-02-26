import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAll().subscribe(posts => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    // optimistic, faster than pessimistic
    this.posts.splice(0, 0, post);

    input.value = '';

    this.postService.create(post).subscribe(
      newPost => {
        // pessimistic
        // this.posts.splice(0, 0, post);

        // tslint:disable-next-line: no-string-literal
        post['id'] = newPost['id'];
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          // console.log(error.originalError);
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(postItem) {
    const data = { title: 'Title is updated' };
    this.postService.update(postItem, data).subscribe((post: any) => {
      this.posts.map(p => {
        if (p.id === post.id) p.title = post.title;
      });
    });
  }

  deletePost(postItem) {
    // optimistic
    const index = this.posts.indexOf(postItem);
    this.posts.splice(index, 1);

    this.postService.delete(postItem).subscribe(
      () => {
        // pessimistic
        // const index = this.posts.indexOf(postItem);
        // this.posts.splice(index, 1);
      },
      (error: AppError) => {
        this.posts.splice(index, 0, postItem);
        if (error instanceof NotFoundError) {
          alert('Post was already deleted');
        } else {
          throw error;
        }
      }
    );
  }
}
