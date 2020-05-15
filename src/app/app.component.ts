import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestServicesService } from './rest-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iconnect Machine test';
  constructor(
    private router: Router,
    private restService: RestServicesService
  ) { }

  ngOnInit(): void {
    if(this.restService.getStorage("userInfo"))
    {
      this.router.navigate(["/home"])
    }
    else
    {
      this.router.navigate(["/login"])
    }
  
  }
}
