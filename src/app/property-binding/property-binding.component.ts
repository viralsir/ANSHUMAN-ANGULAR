import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }
  msg="this is value from msg using property binding";
  f1:boolean=true;
  f2:boolean=true;

  ngOnInit(): void {
  }

}
