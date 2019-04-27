import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationLinks } from '../planet';

@Component({
  selector: 'app-browse-buttons',
  templateUrl: './browse-buttons.component.html',
  styleUrls: ['./browse-buttons.component.css']
})
export class BrowseButtonsComponent implements OnInit {
  @Input() navigationLinks: NavigationLinks;

  @Output() clickedLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickLink(link: string): void {
    this.clickedLink.emit(link);
  }

}
