export type EventType =
  | 'ALL'
  | 'TRAINING'
  | 'WORKSHOP'
  | 'CONFERENCE'
  | 'COMMUNITY_OUTREACH'
  | 'WEBINAR'
  | 'FUNDRAISING'
  | 'CEREMONY'
  | string;

export type EventStatus = 'UPCOMING' | 'PAST' | 'ONGOING' | 'CANCELLED';

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  type: string;
  status: EventStatus;
  eventDate: string;
  time: string;
  location: string;
  seats?: string;
  isFree: boolean;
  fee?: string;
  coverImageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventsPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface EventsResponse {
  success: boolean;
  message: string;
  data: Event[];
  pagination: EventsPagination;
}

export interface SingleEventResponse {
  success: boolean;
  message?: string;
  data: Event;
}

export interface RsvpPayload {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  ticketsCount?: number;
}

export interface RsvpResponse {
  success: boolean;
  message: string;
  data?: any;
}
