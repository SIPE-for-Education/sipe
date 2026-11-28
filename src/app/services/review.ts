import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewResponse } from '../models/ReviewResponse';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private API_URL = `${environment.API_URL}/reviews`;

  constructor(private http: HttpClient) {}

  getAllReview(): Observable<ReviewResponse[]> {
    return this.http.get<ReviewResponse[]>(this.API_URL);
  }
}
