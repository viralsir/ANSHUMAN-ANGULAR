import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  productformref=new FormGroup({
    id:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    qty:new FormControl("",[Validators.required,Validators.min(0)])
  })
  displayform:boolean=false;
  displaytable:boolean=false;
   msg:string=""
  displayhead:boolean=true;
  names:Array<string>=["vimal","vishal","amit","raj","jay","Rajan"]
  productlist:Array<any>=[{"id":1,"name":"computer","qty":45},
                      {"id":2,"name":"Radio","qty":45},
                      {"id":3,"name":"Mouse","qty":45},
                      {"id":4,"name":"Mobile","qty":45},
                      {"id":5,"name":"cpu","qty":4}
                     ]
  constructor() { }

  ngOnInit(): void {
  }

  addproduct()
  {
    let productform=this.productformref.value
    let product:any={}
    product["id"]=productform.id
    product["name"]=productform.name
    product["qty"]=productform.qty
    this.productlist.push(product)

    this.productformref.reset()
    this.msg="record is inserted."

  }

  entrybtnclick(){
    this.displayform=true;
    this.displaytable=false;
  }
  viewbtnclick(){
    this.displayform=false;
    this.displaytable=true;
    this.msg=""
  }
}
