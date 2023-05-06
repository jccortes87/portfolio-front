import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html' 
})
export class DashboardComponent {
  
  goBack(){
    console.log('esto es una prueba para atras');
  }
}
