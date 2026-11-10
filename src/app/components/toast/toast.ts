import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-toast',
  styleUrl: './toast.scss',
  templateUrl: './toast.html',
  standalone: true,
})
export class Toast {
  // function showToast(msg, type, icon) {
  //   const container = document.getElementById("toastContainer");
  //   const toast = document.createElement("div");
  //   toast.className = `toast-msg toast-${type}`;
  //   toast.innerHTML = `<i class="ti ${icon}"></i> ${msg}`;
  //   container.appendChild(toast);
  //   setTimeout(() => toast.remove(), 3200);
  // }
}
