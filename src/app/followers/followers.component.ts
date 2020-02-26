import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
// import 'rxjs/add/operator/combineLatest';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(
    // tslint:disable-next-line: variable-name
    private _followerService: FollowerService,
    // tslint:disable-next-line: variable-name
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    combineLatest([
      this._activatedRoute.paramMap,
      this._activatedRoute.queryParamMap
    ]).pipe(
      switchMap(combined => {
        // const id = combined[0].get('id');
        // const page = combined[1].get('page');
        return this._followerService.getAll();
    }))
    .subscribe((followers: any) => this.followers = followers);
  }

}
