import { Component, OnInit, signal } from '@angular/core';
import { NotificationResponse } from '../../models/NotificationResponse';
import { NotificationService } from '../../services/notification';
import { NotificationType } from '../../enums/NotificationType';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-notification-card',
  styleUrl: './notification-card.scss',
  templateUrl: './notification-card.html',
  standalone: true,
})
export class NotificationCard implements OnInit {
  protected readonly NotificationType = NotificationType;

  notifications = signal<NotificationResponse[]>([]);

  constructor(private service: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.service.getAllNotifications().subscribe({
      next: (data) => {
        this.notifications.set(data);
      },
      error: (err) => {
        console.error('Erro ao carregar as notificações', err);
      },
    });
  }

  readNotification(notification: NotificationResponse) {
    if (!notification.read) this.toggleRead(notification);
  }

  private toggleRead(notification: NotificationResponse): void {
    this.notifications.update((current) =>
      current.map((item) => (item === notification ? { ...item, read: !item.read } : item)),
    );
  }

  isHoje(data: Date): boolean {
    const hoje = new Date();
    return (
      data.getDate() === hoje.getDate() &&
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear()
    );
  }

  isOntem(data: Date): boolean {
    const ontem = new Date();
    ontem.setDate(ontem.getDate() - 1); // Subtrai 1 dia (funciona até na virada de mês/ano)

    return (
      data.getDate() === ontem.getDate() &&
      data.getMonth() === ontem.getMonth() &&
      data.getFullYear() === ontem.getFullYear()
    );
  }
}
