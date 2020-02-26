import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class ArchiveDetailComponent implements OnInit {
  archive = null;

  constructor(
    // tslint:disable-next-line: variable-name
    private _router: Router,
    // tslint:disable-next-line: variable-name
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {
      const year = params.get('year');
      const month = params.get('month');
      this.archive = `${year}/${month}`;
    });
  }

  goToAllArchives() {
    this._router.navigate(['/archives']);
  }

}
