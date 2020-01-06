import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isLiked: boolean;
  @Input() likesCount: number;
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
    this.change.emit({ newValue: this.isLiked });
  }
}

export interface LikeChangeEventArgs {
  newValue: boolean;
}
