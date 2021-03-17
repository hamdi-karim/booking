export interface Airports {
  id: string;
  icao: string;
  iata: string;
  name: string;
}

export interface CompanyInfo {
  shortName: string;
  name: string;
  logo: string;
  smallLogo: string;
  url: string;
  email: string;
  phone1: string;
  phone2: string;
  reservationEmail: string;
  address1: string;
  address2: string;
  slogan: string;
  disclaimer: string;
  toa: string;
  vat: string;
  taxId: string;
}

export interface AgeRestrictions {
  adultMinimum: string;
  seniorMinimum: string;
  kidMinimum: string;
  kidMaximum: string;
  infantMinimum: string;
  infantMaximum: string;
}

export interface PassengerInformation {
  frequentFlightNumber: string;
  category: string;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: Date;
  sex: string;
  weight: number;
  travelData: ITravelDocumentation;
  additionalInfo: IAdditionalInfo;
}

export interface ITravelDocumentation {
  documentType: string;
  issuingDate: Date;
  expiryDate: Date;
  place: string;
  travelPhoneNumber: string;
}

export interface IAdditionalInfo {
  nationality: string;
  phoneNumber: string;
}
export interface IRoutesAvailable {
  nationality: string;
  phoneNumber: string;
}

export interface INumberOfPassengers {
  numberOfAdults: number;
  numberOfChildren: number;
  numberOfBabies: number;
  numberOfPassengers: number;
}
