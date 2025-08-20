// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { trips } from '../data/trips';
// import { TripCardComponent } from '../trip-card/trip-card';

// @Component({
//   selector: 'app-trip-listing',
//   standalone: true,
//   imports: [CommonModule, TripCardComponent],
//   templateUrl: './trip-listing.html',
//   styleUrl: './trip-listing.css'
// })
// export class TripListingComponent implements OnInit {
//   trips: Array<any> = trips;

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//   }

//   public addTrip(): void {
//     this.router.navigate(['add-trip']);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListingComponent implements OnInit {
  trips: Array<any> = [];
  message: string = '';
  
  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) {
    console.log('trip-listing constructor');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
  
  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if(value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          } else {
            this.message = 'There were no trips retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }
  
  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}