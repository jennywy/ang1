import { Component, OnInit } from '@angular/core';

@Component({
  // selector:'app-server', /* to use it as an html tag */
  // selector: '[app-servers]', /* to use it as an attribute */
  selector: '.app-servers', /* to use it as a class */
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
