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

  courses = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'TypeScript' }
  ];
  viewMode = 'default';

  otherCourses;

  canSave = true;

  task = {
    title: 'Review',
    assignee: null
  };

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('favorite changed...: ', eventArgs);
  }

  onLikeChanged(eventArgs: LikeChangeEventArgs) {
    this.tweet.isLiked = eventArgs.newValue;
  }

  onAddCourse() {
    this.courses.push({ id: 4, name: 'NodeJS' });
  }

  onRemoveCourse(course: any) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdateCourse(course: any) {
    course.name = 'Updated';
  }

  onLoadOtherCourse() {
    this.otherCourses = [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'JavaScript' }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
