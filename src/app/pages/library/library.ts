import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-library',
  styleUrl: './library.scss',
  templateUrl: './library.html',
  standalone: true,
})
export class Library implements OnInit {
  private titleService = inject(Title);
  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Library');
  }
}
