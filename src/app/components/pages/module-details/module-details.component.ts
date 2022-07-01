import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form)
  }

}
