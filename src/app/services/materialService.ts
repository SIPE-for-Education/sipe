import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaterialResponse } from '../models/MaterialResponse';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private API_URL = `${environment.API_URL}/materials`;

  constructor(private http: HttpClient) {}

  getAllMaterials(): Observable<MaterialResponse[]> {
    return this.http.get<MaterialResponse[]>(this.API_URL);
  }
}
