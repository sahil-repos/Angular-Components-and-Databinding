import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-elementt',
  templateUrl: './server-elementt.component.html',
  styleUrls: ['./server-elementt.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementtComponent implements OnInit {
//@input to help parent component access child element's element
//binding to custom prop , binding our own prop with @input decorator 
//@input marks that prop can be set from outside 


//alias : to target other prop/name (here srvElement) , use the target  in @input() decorator, 
  @Input('srvElement') element: {type: string, name: string, content:string };

  constructor() { }

  ngOnInit() {
  }

}
