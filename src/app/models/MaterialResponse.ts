import { MaterialUsesResponse } from './MaterialUsesResponse';
import { MaterialTopicsResponse } from './MaterialTopicsResponse';
import { MaterialSuggestionsResponse } from './MaterialSuggestionsResponse';

export interface MaterialResponse {
  id: string;
  system: number;
  serie: string;
  discipline: string;
  bimester: number;
  type: string;
  icon: string;
  title: string;
  subtitle: string;
  tags: string[];
  pages: number;
  updated: string;
  status: string;
  uses: MaterialUsesResponse;
  aiUses: string[];
  topics: MaterialTopicsResponse[];
  suggestions: MaterialSuggestionsResponse[];
}
