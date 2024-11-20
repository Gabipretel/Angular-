import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {
  messageType: string = 'error'
  inputValue: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
