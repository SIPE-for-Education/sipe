import { Injectable, signal } from '@angular/core';
import { ToastMessage } from '../models/ToastMessage';
import { ToastType } from '../enums/ToastType';

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<ToastMessage[]>([]);

  show(
    message: string,
    type: ToastType = ToastType.INFO,
    icon = 'bi bi-info-circle',
    duration = 3200,
  ): void {
    const toast: ToastMessage = { message, type, icon };

    this.toasts.update((toasts) => [...toasts, toast]);
    setTimeout(() => this.dismiss(toast), duration);
  }

  dismiss(toast: ToastMessage): void {
    this.toasts.update((toasts) => toasts.filter((current) => current !== toast));
  }
}
