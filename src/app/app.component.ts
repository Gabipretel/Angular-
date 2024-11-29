import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primera_app_angular';
  date = '28/11/2024'
  estado : boolean= true;

  toogleState = () => {
    this.estado = !this.estado;
    console.log('estado actual:',this.estado)
  }
}
