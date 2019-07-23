import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-2',
  templateUrl: './server-console-2.component.html',
  styleUrls: ['./server-console-2.component.css']
})
export class ServerConsole2Component {
  serverElements = [];

  onServerAdded(serverData : {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData : {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

  onChangeFirst(){
    (this.serverElements.length > 0) ? this.serverElements[0].name = 'Changed' : console.log('No elements to change');
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
}
