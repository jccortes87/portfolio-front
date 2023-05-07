import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../common/global-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html' 
})
export class DashboardComponent implements OnInit {
  isLogin:boolean = true;
  
  constructor(private globalservice:GlobalService){}

  ngOnInit(): void {
    this.globalservice.currentLogin.subscribe(value =>{
      this.isLogin = value;
    })
    
  }
 
}
