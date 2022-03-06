import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  msg:string=""

  constructor() { }

  ngOnInit(): void {
  }

  btnclicked(name:any){
    console.log("btn is clicked");
    this.msg=name.value;
    //console.log(name.value);
    //name.style.backgroundColor='yellow';
  }
  ansbtnclicked(no1:any,no2:any)
  {
    this.msg="total is "+(eval(no1.value)+eval(no2.value));

  }
  voter(no:any)
  {
    if(eval(no.value)>18)
    {
      this.msg="you are eligable for voting";
    }
    else
    {
      this.msg="you are not eligable for voting";
    }
  }

}
