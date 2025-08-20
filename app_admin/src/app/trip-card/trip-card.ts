// import { Component, OnInit, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';


// @Component({
//   selector: 'app-trip-card',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './trip-card.html',
//   styleUrl: './trip-card.css'
// })
// export class TripCardComponent implements OnInit {
//   @Input('trip') trip: any;

//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService
//   ) {}

//   ngOnInit(): void {
//   }

//   public isLoggedIn() {
//     return this.authenticationService.isLoggedIn();
//   }
// }
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  addTrip(): void {
    this.router.navigate(['/add-trip']);
  }

  editTrip(trip: any): void {
    this.router.navigate(['/edit-trip'], { queryParams: { tripCode: trip.code } });
  }
}