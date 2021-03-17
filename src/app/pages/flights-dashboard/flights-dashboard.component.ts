import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FlightsFormComponent } from "./flights-form/flights-form.component";

@Component({
  selector: "app-flights-dashboard",
  templateUrl: "./flights-dashboard.component.html",
  styleUrls: ["./flights-dashboard.component.scss"],
})
export class FlightsDashboardComponent implements OnInit {
  submitted: boolean = false;
  availableRoutes;
  @ViewChild(FlightsFormComponent, { static: true })
  flightForm: FlightsFormComponent;

  ngOnInit() {}

  onSubmittedForm(flag: boolean) {
    console.log("onSubmittedForm");
    this.submitted = flag;
    console.log(flag);
  }

  getAvailableRoutes(data) {
    console.log("getAvailableRoutes");
    console.log("getAvailableRoutes data",data);
    this.availableRoutes = data;
  }
}
