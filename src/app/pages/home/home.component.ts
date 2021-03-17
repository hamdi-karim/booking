import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FlightsDashboardComponent } from "../flights-dashboard/flights-dashboard.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  @ViewChild(FlightsDashboardComponent, { static: true })
  flightDashboard: FlightsDashboardComponent;

  NumAdults: number;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }

  ngAfterViewInit() {
    console.log(
      "%c red numberOfAdults from @HomeComponent",
      "color: red",
      this.flightDashboard.flightForm.numberOfAdults
    );
    this.NumAdults = this.flightDashboard.flightForm.numberOfAdults;
  }
}
