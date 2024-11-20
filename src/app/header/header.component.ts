import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  company : string = 'Agripay';
  name : string = 'Gabriel';
  age: number = 29;
  result : null | number = null;
  constructor() { }

  ngOnInit(): void {
    this.company = 'Globant';
    this.sayHelloWorld();
    // this.calculateSum(10,20)
  }

  sayHelloWorld = () => {
    console.log(` Bienvenido ${this.name} a ${this.company} !!
      Te deseamos mucho exito! 
      `)
  }
  calculateSum = (a:number,b:number): void => {
    this.result = a + b
  }
}
