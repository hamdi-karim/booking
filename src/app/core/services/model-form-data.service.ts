import { Injectable, OnInit } from "@angular/core";
import { INumberOfPassengers } from "src/app/shared/interfaces";

@Injectable({
  providedIn: "root",
})
export class ModelFormDataService implements OnInit {
  _Passengers: INumberOfPassengers;
  constructor() {}

  ngOnInit() {
    this._Passengers["numberOfAdults"] = 2;
    this._Passengers["numberOfChildren"] = 1;
    this._Passengers["numberOfBabies"] = 1;
    this._Passengers["numberOfPassengers"] = 4;
  }

  addPassengers(
    nAdults: number,
    nChildren: number,
    nBabies: number,
    nAllPassengers: number
  ) {
    // console.log("%c ******* nAdults *******", "color: red", nAdults);
    // console.log("%c ******* nChildren *******", "color: red", nChildren);
    // console.log("%c ******* nBabies *******", "color: red", nBabies);
    console.log(
      "%c ******* this._Passengers *******",
      "color: red",
      this._Passengers
    );
    this._Passengers.numberOfAdults = nAdults;
    this._Passengers["numberOfChildren"] = nChildren;
    this._Passengers["numberOfBabies"] = nBabies;
    this._Passengers["numberOfPassengers"] = nAllPassengers;
  }

  getPassengers() {
    return this._Passengers;
  }
}
