import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-filters-bar',
  styleUrl: './filters-bar.scss',
  templateUrl: './filters-bar.html',
  standalone: true,
})
export class FiltersBar {
  // function filterMaterials() {
  //   const q = document.getElementById("searchInput").value.toLowerCase();
  //   const sis = document.getElementById("filterSistema").value;
  //   const ser = document.getElementById("filterSerie").value;
  //   const disc = document.getElementById("filterDisc").value;
  //   const bim = document.getElementById("filterBim").value;
  //   const filtered = materials.filter((m) => {
  //     const matchQ =
  //       !q ||
  //       m.title.toLowerCase().includes(q) ||
  //       m.subtitle.toLowerCase().includes(q) ||
  //       m.tags.some((t) => t.toLowerCase().includes(q));
  //     const matchSis = !sis || m.sistema === sis || m.sistema === "bncc";
  //     const matchSer = !ser || m.serie === ser || m.serie === "";
  //     const matchDisc = !disc || m.disc === disc || m.disc === "";
  //     const matchBim = !bim || m.bim === bim || m.bim === "";
  //     return matchQ && matchSis && matchSer && matchDisc && matchBim;
  //   });
  //   renderMaterials(filtered);
  // }

  // function setView(v) {
  // currentView = v;
  // const grid = document.getElementById("materialsGrid");
  // document
  // .getElementById("btnGrid")
  // .classList.toggle("active", v === "grid");
  // document
  // .getElementById("btnList")
  // .classList.toggle("active", v === "list");
  // grid.classList.toggle("list-view", v === "list");
  // }
}
