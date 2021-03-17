import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/* Components */
import { AppComponent } from "./app.component";
import { FlightsDashboardComponent } from "./pages/flights-dashboard/flights-dashboard.component";
import { PassengersInformationComponent } from "./pages/passengers-information/passengers-information.component";
import { HomeComponent } from "./pages/home/home.component";
const routes: Routes = [
  // { path: "", component: FlightsDashboardComponent },
  { path: "", component: HomeComponent },
  // { path: "", component: PassengersInformationComponent },
  // { path: "booking-process", component: FlightsAvailableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
