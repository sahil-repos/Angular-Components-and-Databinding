import { Component, OnInit, 
  Input, ViewEncapsulation,
   OnChanges, SimpleChanges, 
   DoCheck, AfterContentInit, 
   AfterContentChecked, 
   AfterViewInit,
   AfterViewChecked,
   OnDestroy}
    from '@angular/core';

@Component({
  selector: 'app-server-elementt',
  templateUrl: './server-elementt.component.html',
  styleUrls: ['./server-elementt.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementtComponent implements OnInit, OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy	 {
//@input to help parent component access child element's element
//binding to custom prop , binding our own prop with @input decorator 
//@input marks that prop can be set from outside 


//alias : to target other prop/name (here srvElement) , use the target  in @input() decorator, 
  @Input('srvElement') element: {type: string, name: string, content:string };

  constructor() {

    console.log('constructor called')
   }

ngOnChanges(changes: SimpleChanges){
  console.log('ngOnchnges called');
  console.log(changes);

}

ngOnInit() {
  console.log('ngoninit called');

}


ngDoCheck(){
  console.log('ngDoCheck called')

}

ngAfterContentInit(){
  console.log('AfterContentInit called')

}
ngAfterContentChecked(){
  console.log('ngaftercontetnchecked called')

}

ngAfterViewInit(){
  console.log('ngAfterViewInit called')

}

ngAfterViewChecked(){
  console.log('ngafterviewChcked called')

}

ngOnDestroy(){
  console.log('ngOnDestroy called')

}

  
}
