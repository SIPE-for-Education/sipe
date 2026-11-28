import { TimelineResponse } from './TimelineResponse';
import { PlanningRevisionResponse } from './PlanningRevisionResponse';
import { PlanningAiSuggestionResponse } from './PlanningAiSuggestionResponse';

export interface PlanningResponse {
  id: number;
  title: string;
  status: string;
  timelines: TimelineResponse[];
  revisions: PlanningRevisionResponse[];
  aiPrompt: string;
  aiSuggestions: PlanningAiSuggestionResponse[];
  updatedAt: string;
}
