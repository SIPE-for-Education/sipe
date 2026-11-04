import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-feedback',
  styleUrl: './feedback.scss',
  templateUrl: './feedback.html',
  standalone: true,
})
export class Feedback implements OnInit {
  private titleService = inject(Title);
  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Feedback');
  }
}
