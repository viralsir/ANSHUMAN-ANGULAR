import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  answer:string=""

  constructor() { }

  ngOnInit(): void {
  }

  calculateAns(CalculateFormRef:NgForm){
       console.log(CalculateFormRef.value);
       let calcuateform=CalculateFormRef.value;
       if(calcuateform.symbol=="+")
       {
         this.answer="No1:"+calcuateform.n1+"Answer :"+(eval(calcuateform.n1)+eval(calcuateform.n2))
       }
       else if(calcuateform.symbol=="-")
       {
         this.answer="Answer :"+(eval(calcuateform.n1)-eval(calcuateform.n2))
       }
       else if(calcuateform.symbol=="*")
       {
         this.answer="Answer :"+(eval(calcuateform.n1)*eval(calcuateform.n2))
       }
       else if(calcuateform.symbol=="/")
       {
         this.answer="Answer :"+(eval(calcuateform.n1)/eval(calcuateform.n2))
       }
  }

}
