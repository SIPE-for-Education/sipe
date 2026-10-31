import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
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
