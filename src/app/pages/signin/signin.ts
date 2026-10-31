import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-signin',
  styleUrl: './signin.scss',
  templateUrl: './signin.html',
  standalone: true,
})
export class Signin implements OnInit {
  private titleService = inject(Title);
  ngOnInit(): void {
    this.titleService.setTitle('SIPE - Sign In');
  }
}
