import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mean-course';
  constructor(private authService: AuthService) {}
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.authService.autoAuthUser();
  }
}
