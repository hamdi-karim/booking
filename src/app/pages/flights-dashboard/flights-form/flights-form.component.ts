import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { BookingService } from "src/app/core/services/booking.service";
import {
	Airports,
	CompanyInfo,
	AgeRestrictions,
	INumberOfPassengers
} from "src/app/shared/interfaces";
import { ModelFormDataService } from "src/app/core/services/model-form-data.service";

@Component({
	selector: "app-flights-form",
	templateUrl: "./flights-form.component.html",
	styleUrls: ["./flights-form.component.scss"]
})
export class FlightsFormComponent implements OnInit {
	@Output() submitted = new EventEmitter<boolean>();
	@Output() routesAvailable = new EventEmitter<any>();
	bookingFlightFormGroup: FormGroup;

	departureStateGroups: Airports[];
	arrivingStateGroups: Airports[];
	companyInfo: CompanyInfo;
	ageRestrictions: AgeRestrictions;
	// routesAvailable: any;

	numberOfAdults: number = 1;
	numberOfChildren: number = 0;
	numberOfBabies: number = 0;
	totalNumberOfPassengers: number = 1;

	departureAirportId: string = "";
	arrivingAirportId: string = "";
	fid: number = 6;
	departingDate: string;

	_passengers: INumberOfPassengers;

	constructor(
		private _formBuilder: FormBuilder,
		private bookingService: BookingService // private modelFormData: ModelFormDataService
	) {}

	ngOnInit() {
		// form initialising updates
		this.bookingFlightFormGroup = this._formBuilder.group({
			flightType: ["round-trip", Validators.required],
			flightInternational: ["international", Validators.required],
			departureStateGroup: ["", Validators.required],
			arrivingStateGroup: ["", Validators.required],
			departureDateInput: ["", Validators.required],
			arrivingDateInput: ["", Validators.required]
		});

		this.getCompanyBranding();
		this.getPassengersAgeRestriction();
		this.getDepartureAirportsList();
	}

	getCompanyBranding() {
		this.bookingService.getCompanyInfomation().subscribe(data => {
			this.companyInfo = data;
		});
	}

	getDepartureAirportsList() {
		this.bookingService.getListDepartingAirports().subscribe(data => {
			this.departureStateGroups = data;
		});
	}

	getSelectedDepartingAutoComplete(value) {
		/* api call - Arriving airports on select change */
		this.bookingService.getListArrivingAirports(value).subscribe(data => {
			this.arrivingStateGroups = data;
		});
	}

	getPassengersAgeRestriction() {
		/* api call - Passengers Age restriction */
		this.bookingService.getAgeRestrictionsForPassengers().subscribe(data => {
			this.ageRestrictions = data;
		});
	}

	/**** Get the id of the corresponding departing airport */
	displayFnDeparture(options: Airports[]): (id: string) => string {
		return (id: string) => {
			this.departureAirportId = id;
			const correspondingOption = Array.isArray(options)
				? options.find(option => option.id === id)
				: null;
			return correspondingOption ? correspondingOption.name : "";
		};
	}

	/**** Get the id of the corresponding arriving airport */
	displayFnArriving(options: Airports[]): (id: string) => string {
		return (id: string) => {
			this.arrivingAirportId = id;
			const correspondingOption = Array.isArray(options)
				? options.find(option => option.id === id)
				: null;
			return correspondingOption ? correspondingOption.name : "";
		};
	}

	onSubmitFlightsForm(event) {
		console.warn(this.bookingFlightFormGroup);

		this.departingDate = this.bookingFlightFormGroup.value.flightType;
		if (this.bookingFlightFormGroup.value.flightType === "multi-city") {
			this.fid = 3;
		} else if (this.bookingFlightFormGroup.value.flightType === "round-trip") {
			this.fid = 6;
		} else if (this.bookingFlightFormGroup.value.flightType === "one-way") {
			this.fid = 7;
		} else if (this.bookingFlightFormGroup.value.flightType === "excursion") {
			this.fid = 4;
		}

		this.departingDate = this.bookingFlightFormGroup.value.departureDateInput
			.toLocaleString("fr-FR", {
				timeZone: "UTC"
			})
			.slice(0, 10);
		this.getRoutesConnections(this.departingDate);
		this.submitted.emit(true);
	}

	getRoutesConnections(date) {
		/* api call - Routes Connections */

		const dateFinal =
			date.slice(6, 10) + "-" + date.slice(3, 5) + "-" + date.slice(0, 2);

		this.bookingService
			.getRoutesAvailable(
				this.departureAirportId,
				this.arrivingAirportId,
				this.fid,
				dateFinal,
				this.totalNumberOfPassengers
			)
			.subscribe(data => {
				// this.routesAvailable = data;
				this.routesAvailable.emit(data);
				console.log("%c routesAvailable", "color: red", data);
			});
	}

	departureDateChange(event) {
		console.log("hello");
		console.log("event", event);
	}

	addPassenger(passengerType: String) {
		if (passengerType == "adult") {
			if (this.numberOfAdults < 8) this.numberOfAdults++;
		} else if (passengerType == "child") {
			if (this.numberOfChildren < 8) this.numberOfChildren++;
		} else if (passengerType == "baby") {
			if (this.numberOfBabies < 8) this.numberOfBabies++;
		}

		this.totalNumberOfPassengers =
			this.numberOfAdults + this.numberOfChildren + this.numberOfBabies;

		// this.modelFormData.addPassengers(
		//   this.numberOfAdults,
		//   this.numberOfChildren,
		//   this.numberOfBabies,
		//   this.totalNumberOfPassengers
		// );
	}

	removePassenger(passengerType: String) {
		if (passengerType == "adult") {
			if (this.numberOfAdults >= 1) this.numberOfAdults--;
		} else if (passengerType == "child") {
			if (this.numberOfChildren >= 1) this.numberOfChildren--;
		} else if (passengerType == "baby") {
			if (this.numberOfBabies >= 1) this.numberOfBabies--;
		}

		this.totalNumberOfPassengers =
			this.numberOfAdults + this.numberOfChildren + this.numberOfBabies;

		// this.modelFormData.addPassengers(
		//   this.numberOfAdults,
		//   this.numberOfChildren,
		//   this.numberOfBabies,
		//   this.totalNumberOfPassengers
		// );
	}
}
