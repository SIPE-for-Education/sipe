import { Component, input, OnInit } from '@angular/core';
import { PlanningTimelineResponse } from '../../models/PlanningTimelineResponse';

@Component({
  imports: [],
  selector: 'app-timeline',
  styleUrl: './timelines.scss',
  templateUrl: './timelines.html',
  standalone: true,
})
export class Timelines {
  timelines = input<PlanningTimelineResponse[]>([]);
}
