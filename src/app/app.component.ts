import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';
import { LikeChangeEventArgs } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  post = {
    title: 'Title',
    isFavorite: true
  };
  tweet = {
    isLiked: false,
    likesCount: 10
  };

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('favorite changed...: ', eventArgs);
  }

  onLikeChanged(eventArgs: LikeChangeEventArgs) {
    this.tweet.isLiked = eventArgs.newValue;
  }
}
