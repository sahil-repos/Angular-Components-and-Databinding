import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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
  
  //newServerName = '';
  // newServerContent = '';

  //local references fetched through viewCHild
  //viewchild arg=>selector of element

  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
    
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput);
    console.log(nameInput.value);

  this.serverCreated.emit
  ({
    // serverName:this.newServerName,
    serverName:nameInput.value,

    serverContent:this.serverContentInput.nativeElement.value;
  });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName:this.newServerName,
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value;
       })

    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

}
