import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    // tslint:disable-next-line: variable-name
    private _activedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    // this._activedRoute.paramMap.subscribe(params => {
    //   const id = params.get('id');
    // });
  }

  goToAllFollowers() {
    // this is called Programmatic Navigation
    this._router.navigate(['/followers'], { queryParams: { page: 1, order: 'newest' } });
  }

}
