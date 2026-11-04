import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-planning',
  styleUrl: './planning.scss',
  templateUrl: './planning.html',
  standalone: true,
})
export class Planning implements OnInit {
  private titleService = inject(Title);
  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Planning');
  }
}
