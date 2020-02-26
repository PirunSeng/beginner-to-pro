import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  archives = [
    {
      year: '2019',
      month: '1'
    },
    {
      year: '2019',
      month: '2'
    },
    {
      year: '2019',
      month: '3'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
