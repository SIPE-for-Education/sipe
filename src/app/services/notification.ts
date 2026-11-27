import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NotificationResponse } from '../models/NotificationResponse';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private API_URL = `${environment.API_URL}/notifications`;

  constructor(private http: HttpClient) {}

  getAllNotifications(): Observable<NotificationResponse[]> {
    return this.http.get<NotificationResponse[]>(this.API_URL).pipe(
      map((notifications) =>
        notifications.map((notification) => ({
          ...notification,
          createdAt: new Date(notification.createdAt),
        })),
      ),
    );
  }
}
