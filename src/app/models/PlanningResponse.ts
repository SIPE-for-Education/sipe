import { PlanningTimelineResponse } from './PlanningTimelineResponse';
import { PlanningRevisionResponse } from './PlanningRevisionResponse';

export interface PlanningResponse {
  id: number;
  title: string;
  status: string;
  timelines: PlanningTimelineResponse[];
  revisions: PlanningRevisionResponse[];
  aiPrompt: string;
}
