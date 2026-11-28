import { Component, input, OnInit } from '@angular/core';
import { TimelineResponse } from '../../models/TimelineResponse';

@Component({
  imports: [],
  selector: 'app-timeline',
  styleUrl: './timelines.scss',
  templateUrl: './timelines.html',
  standalone: true,
})
export class Timelines {
  timelines = input<TimelineResponse[]>([]);
}
