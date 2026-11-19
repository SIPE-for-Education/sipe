import { PlanningRevisionResponse } from './PlanningRevisionResponse';

export interface PlanningResponse {
  id: number;
  title: string;
  status: string;
  revisions: PlanningRevisionResponse[];
  aiPrompt: string;
}
