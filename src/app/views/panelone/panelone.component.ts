import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panelone',
  templateUrl: './panelone.component.html',
  styleUrls: ['./panelone.component.css']
})
export class PaneloneComponent implements OnInit {
  hexacode:string='';
  @Input()
  set HexaCode(code){
  this.hexacode=code;
  this.event.emit(this.hexacode);
  }
  get HexaCode():string{
    return this.hexacode;
  }
  @Output() event = new EventEmitter();
  dynamiccolor:string='colorchange'
  constructor() {
   }

  ngOnInit() {
  }

}
