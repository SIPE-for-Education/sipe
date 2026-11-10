import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { KpiResponse } from '../models/KpiResponse';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private API_URL = `${environment.API_URL}/kpis`;

  readonly http = inject(HttpClient);

  getAllKpis(): Observable<KpiResponse> {
    return this.http.get<KpiResponse>(this.API_URL);
  }
}
