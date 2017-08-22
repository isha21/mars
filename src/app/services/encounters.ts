import { Injectable } from '@angular/core';
import { Report } from '../models/report';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService{
 ReportUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor(private http: Http) {}


    getReport(): Promise<Report[]> {
      return this.http.get(this.ReportUrl)
      .toPromise()
      .then((response) => response.json().aliens)
      .catch(this.handleError);
    }
  

    private handleError(error: any): Promise<any> {
      console.error('An error occured', error);
      return Promise.reject(error.message || error);
    }

} 