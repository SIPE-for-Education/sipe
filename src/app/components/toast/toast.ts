import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toastService';

@Component({
  imports: [],
  selector: 'app-toast',
  styleUrl: './toast.scss',
  templateUrl: './toast.html',
  standalone: true,
})
export class Toast {
  readonly toastService = inject(ToastService);
}
