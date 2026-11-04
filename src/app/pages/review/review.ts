import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-review',
  styleUrl: './review.scss',
  templateUrl: './review.html',
  standalone: true,
})
export class Review implements OnInit {
  private titleService = inject(Title);
  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Review');
  }
}
