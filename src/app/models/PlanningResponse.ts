import { PlanningTimelineResponse } from './PlanningTimelineResponse';
import { PlanningRevisionResponse } from './PlanningRevisionResponse';
import { PlanningAiSuggestionResponse } from './PlanningAiSuggestionResponse';

export interface PlanningResponse {
  id: number;
  title: string;
  status: string;
  timelines: PlanningTimelineResponse[];
  revisions: PlanningRevisionResponse[];
  aiPrompt: string;
  aiSuggestions: PlanningAiSuggestionResponse[];
}
