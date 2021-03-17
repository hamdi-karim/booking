export interface ISharedRoutesConnections {
  flight: IflightGroupInfo;
}

export interface IflightGroupInfo {
  flightNo: string;
  departing: string;
  from_iata: string;
  from_icao: string;
  ids: string;
  seats: number;
  to_iata: string;
  to_icao: string;
  duration: string;
  stops: number;
  distance: string;
  price: string;
  charges: string;
  total: string;
  vat: string;
}
