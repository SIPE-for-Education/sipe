import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanningResponse } from '../models/PlanningResponse';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  private API_URL = `${environment.API_URL}/plannings`;

  constructor(private http: HttpClient) {}

  getAllPlannings(): Observable<PlanningResponse[]> {
    return this.http.get<PlanningResponse[]>(this.API_URL);
  }
}
