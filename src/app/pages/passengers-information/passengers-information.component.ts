import { Component, OnInit, SimpleChanges, Input } from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-passengers-information",
  templateUrl: "./passengers-information.component.html",
  styleUrls: ["./passengers-information.component.scss"],
})
export class PassengersInformationComponent implements OnInit {
  passengersform: FormGroup;

  types = ["Adult", "Child", "Baby"];
  documentTypes = ["Passport", "CIN"];

  numberOfPassengers = [];
  numberOfAdults: number = 2;
  numberOfChildren: number = 1;
  numberOfBabies: number = 3;
  totalP: number = 0;
  counter: number;

  @Input() numbeOfAdults: number;

  constructor(private fb: FormBuilder) {}

  numberOfPassengersObjectPreparation() {
    this.numberOfPassengers = [];

    if (this.numberOfAdults > 0) {
      for (
        this.counter = 0;
        this.counter < this.numberOfAdults;
        this.counter++
      ) {
        this.totalP++;
        this.numberOfPassengers.push("Passenger" + this.totalP + " - Adult");
      }
    }
    if (this.numberOfChildren > 0) {
      for (
        this.counter = 0;
        this.counter < this.numberOfChildren;
        this.counter++
      ) {
        this.totalP++;
        this.numberOfPassengers.push("Passenger" + this.totalP + " - Child");
      }
    }
    if (this.numberOfBabies > 0) {
      for (
        this.counter = 0;
        this.counter < this.numberOfBabies;
        this.counter++
      ) {
        this.totalP++;
        this.numberOfPassengers.push("Passenger" + this.totalP + " - Baby");
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.numberOfPassengersObjectPreparation();
    this.generatePassengersFormGroups();
  }

  ngOnInit() {
    this.numberOfPassengersObjectPreparation();
    this.passengersform = this.fb.group({
      passengersArr: this.fb.array([]),
    });
    this.generatePassengersFormGroups();
  }

  addPassengerButtonClick(): void {
    (<FormArray>this.passengersform.get("passengersArr")).push(
      this.newPassenger()
    );
  }

  generatePassengersFormGroups() {
    console.log("*********--------**************");

    console.log(this.numberOfPassengers);
    console.log(this.numberOfAdults);

    this.numberOfPassengers.forEach((x) => {
      (<FormArray>this.passengersform.get("passengersArr")).push(
        this.newPassenger()
      );
    });
  }

  newPassenger(): FormGroup {
    return this.fb.group({
      frequentflightnumber: new FormControl(null, [Validators.required]),
      typePassenger: new FormControl(null),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(60),
      ]),
      lastName: new FormControl(null, [Validators.maxLength(60)]),
      middleName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(60),
      ]),
      birthdayDateInput: new FormControl(null, [Validators.maxLength(60)]),
      sex_passenger: new FormControl(null, [Validators.maxLength(60)]),
      weight_passenger: new FormControl(null, [Validators.maxLength(60)]),

      travelDocumentation: new FormGroup({
        typePassenger_travelDocs: new FormControl(null),
        issuingDateInputTravelDocs: new FormControl(null),
        expiryDateInput: new FormControl(null),
        place_passenger: new FormControl(null),
        phoneNumber_passenger: new FormControl(null),
      }),

      additionalInfoGroup: new FormGroup({
        nationality_additionalInfo: new FormControl(null),
        phoneNumber_additionalInfo: new FormControl(null),
      }),
    });
  }

  submitPassengersForm(value) {
    // TODO: Use EventEmitter with form value
    console.warn(this.passengersform);
    console.log(this.passengersform.value);
  }
}
