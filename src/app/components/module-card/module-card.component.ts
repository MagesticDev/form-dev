import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.css']
})
export class ModuleCardComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  body!: string;
  @Input()
  name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
