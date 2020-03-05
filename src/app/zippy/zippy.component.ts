import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input() title;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}