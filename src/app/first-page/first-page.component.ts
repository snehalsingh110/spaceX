import { Component, OnInit } from '@angular/core';
import { DataCallService } from './data-call.service'
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  launchYear: any = [];
  missions: any = [];
  year: any;
  launch: any;
  land: any;

  constructor(private datacall: DataCallService) { }

  ngOnInit(): void {
    this.datacall.firstLoad(100, undefined, undefined, undefined).subscribe((data) => {
      var arrData = data.body;
      this.displayProgs(arrData);
    })
  }

  displayProgs(items: any) {
    this.launchYear = [];
    this.missions = [];
    items.forEach((obj: any) => {
      if (!this.launchYear.includes(obj["launch_year"])) {
        this.launchYear = [...this.launchYear, obj["launch_year"]]
      }

      this.missions = [...this.missions, obj];
    });
  }

  filter(year: any, launch: any, land: any) {
    if (year != 0) {
      if (this.year == year) {
        this.year = undefined;
      } else {
        this.year = year;
      }
    }
    if (launch != 2) {
      if (this.launch == launch) {
        this.launch = undefined;
      } else {
        this.launch = launch
      }
    }
    if (land != 2) {
      if (this.land == land) {
        this.land = undefined;
      } else {
        this.land = land
      }
    }
    this.datacall.firstLoad(100, this.launch, this.land, this.year).subscribe((data) => {
      var arrData = data.body;
      this.displayProgs(arrData);
    })
  }

}
