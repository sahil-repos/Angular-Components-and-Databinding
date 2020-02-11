import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //generric type event emmitter <>, allows you to emmit your own event
  @Output()serverCreated = new EventEmitter<{serverName:string, serverContent:string }>();
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string }>();
  //we added @input to make a property bindable from outside
  //now we need dot add something to serverCreated 
  //and blueprintcreated to make it kind of listen it from outside
  // and thats output -> we passing our event out of the componenet
  
  newServerName = '';
  newServerContent = '';
  
  constructor() { }

  ngOnInit() {
    
  }

  onAddServer() {
  this.serverCreated.emit
  ({
    serverName:this.newServerName,
    serverContent:this.newServerContent
  })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
       })

    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

}
