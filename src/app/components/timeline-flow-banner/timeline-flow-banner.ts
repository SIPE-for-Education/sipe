import { Component, input, signal } from '@angular/core';
import { TimelineResponse } from '../../models/TimelineResponse';

@Component({
  imports: [],
  selector: 'app-timeline-flow-banner',
  styleUrl: './timeline-flow-banner.scss',
  templateUrl: './timeline-flow-banner.html',
  standalone: true,
})
export class TimelineFlowBanner {
  timelines = input<TimelineResponse[]>([]);
}
