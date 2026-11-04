import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-signup',
  styleUrl: './signup.scss',
  templateUrl: './signup.html',
  standalone: true,
})
export class Signup implements OnInit {
  private titleService = inject(Title);
  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Sign Up');
  }
}
