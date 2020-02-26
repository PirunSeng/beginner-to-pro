import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(
    // tslint:disable-next-line: variable-name
    private _followerService: FollowerService
  ) { }

  ngOnInit() {
    this._followerService.getAll().subscribe((followers: any) => this.followers = followers);
  }

}
