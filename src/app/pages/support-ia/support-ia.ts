import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-support-ia',
  styleUrl: './support-ia.scss',
  templateUrl: './support-ia.html',
  standalone: true,
})
export class SupportIA implements OnInit {
  private titleService = inject(Title);
  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Support IA');
  }
}
