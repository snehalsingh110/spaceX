import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class DataCallService {
  url: any="https://api.spacexdata.com/v3/launches";

  constructor(private http:HttpClient) { }

  firstLoad(limit: any,launch_success: any,land_success:any,year:any){
    var httpHeaders = new HttpHeaders().append("Content-Type", "application/json");
    let paramsArray = [];
    if(limit != undefined){
      paramsArray.push(`limit=${limit}`);
    }
    if(launch_success != undefined){
      paramsArray.push(`launch_success=${launch_success}`);
    }
    if(land_success != undefined){
      paramsArray.push(`land_success=${land_success}`);
    }
    if(year != undefined){
      paramsArray.push(`year=${year}`);
    }

    const params = new HttpParams({fromString: `${paramsArray.length > 0 ? paramsArray.join("&") : ""}`});

    const httpOptions = {
      observe: "response" as "response",
      headers: httpHeaders,
      params:params
    };
    return this.http.get(this.url, httpOptions);
  
  }

}
