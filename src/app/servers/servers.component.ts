import { Component, OnInit } from '@angular/core';

@Component({
  // selector:'app-server', /* to use it as an html tag */
  // selector: '[app-servers]', /* to use it as an attribute */
  selector: '.app-servers', /* to use it as a class */
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'Placeholder';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000 );
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created with name " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
