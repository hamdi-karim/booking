import { Injectable } from "@angular/core";
import {
  HttpParams,
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { prepareEventListenerParameters } from "@angular/compiler/src/render3/view/template";

import { Airports, AgeRestrictions } from "src/app/shared/interfaces";
import { CompanyInfo } from "src/app/shared/interfaces";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  constructor(private http: HttpClient) {}

  getRoutesAvailable(
    did: string,
    aid: string,
    fid: number,
    date: string,
    totalNumberOfPassengers
  ): Observable<any> {
    const endpoint = "/routes";
    const url =
      "http://artsgds.io" +
      endpoint +
      "/" +
      did +
      "/" +
      aid +
      "/" +
      fid +
      "/" +
      date+
      "/" +
      totalNumberOfPassengers;
    let header = new HttpHeaders();

    return this.http
      .get<CompanyInfo>(url, { headers: header })
      .pipe(catchError(this.handleError));
  }

  getCompanyInfomation(): Observable<CompanyInfo> {
    const endpoint = "/branding";
    const url = "http://artsgds.io" + endpoint;

    let header = new HttpHeaders();

    return this.http
      .get<CompanyInfo>(url, { headers: header })
      .pipe(catchError(this.handleError));
  }

  getListArrivingAirports(id: number): Observable<Airports[]> {
    const endpoint = "/airports/departing";
    const url = "http://artsgds.io" + endpoint + "/" + id;

    let parameters = new HttpParams();

    // let headers = new HttpHeaders().set("arts-api-key", "testapikey");

    // let headers = new HttpHeaders({
    //   "Access-Control-Allow-Origin": "*",
    //   "arts-api-key": "testapikey",
    // });

    let header = new HttpHeaders();

    return this.http
      .get<Airports[]>(url, { headers: header })
      .pipe(catchError(this.handleError));
  }

  getListDepartingAirports(): Observable<Airports[]> {
    const endpoint = "/airports/departing";
    const url = "http://artsgds.io" + endpoint;

    let parameters = new HttpParams();

    // let headers = new HttpHeaders({
    //   "Access-Control-Allow-Origin": "*",
    //   "arts-api-key": "testapikey",
    // });

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Access-Control-Allow-Origin": "*",
    //     "arts-api-key": "testapikey",
    //   }),
    // };

    // let hdrs = new HttpHeaders({ "arts-api-key": "testapikey" });

    let header = new HttpHeaders();
    // header = header.append("Access-Control-Allow-Origin", "*");
    // header = header.append("Authorization", "testapikey");

    return this.http
      .get<Airports[]>(url, {
        headers: header,
      })
      .pipe(catchError(this.handleError));

    return new Observable((obj) => {
      const response = [
        {
          id: "1",
          icao: "MYNN",
          iata: "NAS",
          name: "Nassau",
        },
        {
          id: "2",
          icao: "MYEH",
          iata: "ELH",
          name: "North Eleuthera",
        },
        {
          id: "3",
          icao: "MYEM",
          iata: "GHB",
          name: "Governors Harbour",
        },
        {
          id: "24",
          icao: "MYCA",
          iata: "ATC",
          name: "Arthurs Town, Cat Island",
        },
      ];
      obj.next(response);
      obj.complete;
    });
  }

  getAgeRestrictionsForPassengers(): Observable<AgeRestrictions> {
    const endpoint = "/ages";
    const url = "http://artsgds.io" + endpoint;

    let header = new HttpHeaders();

    return this.http
      .get<AgeRestrictions>(url, { headers: header })
      .pipe(catchError(this.handleError));
  }

  //ERROR HANDLER
  /**
   *
   * @param error
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
