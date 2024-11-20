import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.css']
})
export class EstructuralComponent implements OnInit {
  isError: boolean = false;
  names = [{name:'Gabriel',edad:29},{name:'Alan',edad:29},{name:'Mauro',edad:32},{name:'Javier',edad:32}]
  constructor() { }

  ngOnInit(): void {
  }
  changeResponse = () => {
    this.isError = !this.isError ; 
  }
}
