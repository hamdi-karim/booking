import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

/* Angular Forms */
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

/* Angular Material Modules Imports */
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";

/* Local Components declarations */

import { FlightsDashboardComponent } from "./flights-dashboard/flights-dashboard.component";
import { FlightsFormComponent } from "./flights-dashboard/flights-form/flights-form.component";
import { PassengersInformationComponent } from "./passengers-information/passengers-information.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    FlightsDashboardComponent,
    FlightsFormComponent,
    PassengersInformationComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
  ],
  exports: [PassengersInformationComponent],
})
export class PagesModule {}
