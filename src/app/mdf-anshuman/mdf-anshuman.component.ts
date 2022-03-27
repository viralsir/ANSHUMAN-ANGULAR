import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mdf-anshuman',
  templateUrl: './mdf-anshuman.component.html',
  styleUrls: ['./mdf-anshuman.component.css']
})
export class MdfAnshumanComponent implements OnInit {
  Studentdemo = new FormGroup({
    Name: new FormControl("", [Validators.required]),

    Roll: new FormControl("", [Validators.required]),

    std: new FormControl("", [Validators.required]),

    maths: new FormControl("", [Validators.required]),

    english: new FormControl("", [Validators.required])
  })

  print: string = ""

  constructor() {
  }

  ngOnInit(): void {
  }
}
