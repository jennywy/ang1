import { Component } from '@angular/core';

@Component({
  // configuration as metadata! IMPORTANT
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverID: number = 10; /* the data type, ex number, string is optional */
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
