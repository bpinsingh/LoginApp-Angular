import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestServicesService } from '../rest-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData;
  success;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restService: RestServicesService
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['data']) {
      this.success = "Login Success!!"
    }
    this.userData = JSON.parse(this.restService.getStorage('userInfo'));
    console.log(` User Data `, this.restService.getStorage('userInfo'));
    
  }

}
