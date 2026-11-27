import { Component, input } from '@angular/core';
import { PlanningRevisionResponse } from '../../models/PlanningRevisionResponse';

@Component({
  imports: [],
  selector: 'app-revision-history',
  styleUrl: './revision-history.scss',
  templateUrl: './revision-history.html',
  standalone: true,
})
export class RevisionHistory {
  revisions = input<PlanningRevisionResponse[]>([]);
}
