import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({
  imports: [RouterOutlet, Sidebar, Header],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sipe');

  private readonly router = inject(Router);

  private readonly isPublicRoute = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.currentRouteIsPublic()),
    ),
    { initialValue: this.currentRouteIsPublic() },
  );

  protected readonly showShell = computed(() => !this.isPublicRoute());

  private currentRouteIsPublic(): boolean {
    let route = this.router.routerState.snapshot.root;

    while (route.firstChild) {
      if (route.data['public'] === true) return true;
      route = route.firstChild;
    }

    return route.data['public'] === true;
  }
}
