import { NotificationType } from '../enums/NotificationType';

export interface NotificationResponse {
  id: string;
  userId: string;
  message: string;
  type: NotificationType;
  read: boolean;
  targetUrl: string;
  createdAt: Date;
}
