import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { KpiResponse } from '../models/KpiResponse';

type KpiSection = 'library' | 'feedback' | 'review';
type KpiGroups = Record<KpiSection, KpiResponse[]>;

@Injectable({
  providedIn: 'root',
})
export class KpiService {
  private API_URL = `${environment.API_URL}/kpis`;
  readonly http = inject(HttpClient);

  getAllKpis(section: KpiSection): Observable<KpiResponse[]> {
    return this.http
      .get<KpiGroups>(this.API_URL)
      .pipe(map((g) => g[section]));
  }
}
