import { Status } from '../enums/Status';

export interface KpiResponse {
  icon: string;
  status: Status;
  value: number;
  label: string;
}
