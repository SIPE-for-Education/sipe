import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  handleSchoolChange() {}

  openAdminModal() {
    //   document.getElementById("adminModal").classList.add("open");
    //   setTimeout(() => {
    //     document.querySelectorAll(".upload-item.uploaded .upload-progress-fill")
    //       .forEach((el) => {
    //         el.style.width = "100%";
    //       });
    //   }, 200);
  }

  openCoordinatorModal() {}

  toggleNotifPanel() {
    // showToast('4 novas notificações', 'info', 'ti-bell');

    //     const notifCard = document.getElementById("notifCard");
    //     const visible = notifCard.style.display === "block";
    //     notifCard.style.display = visible ? "none" : "block";
    //     document.getElementById("notifBadge").textContent = "0";
    //     if (!visible) {
    //       selectPlan(1);
    //       setTimeout(() => {
    //         notifCard.scrollIntoView({behavior: "smooth", block: "nearest"});
    //       }, 100);
    //     }
  }
}
