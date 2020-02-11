import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-elementt',
  templateUrl: './server-elementt.component.html',
  styleUrls: ['./server-elementt.component.css']
})
export class ServerElementtComponent implements OnInit {
//@input to help parent component access child element's element 
  @Input() element: {type: string, name: string, content:string };

  constructor() { }

  ngOnInit() {
  }

}
