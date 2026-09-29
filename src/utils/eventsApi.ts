import type { EventsResponse, SingleEventResponse, RsvpPayload, RsvpResponse } from '../types/events';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://theo-api-production.up.railway.app';

/**
 * Fetch events list from the live API (No dummy data)
 */
export async function getEvents(params: {
  page?: number;
  limit?: number;
  status?: string;
  type?: string;
}): Promise<EventsResponse> {
  const query = new URLSearchParams();
  if (params.page) query.set('page', params.page.toString());
  if (params.limit) query.set('limit', params.limit.toString());
  if (params.status) query.set('status', params.status);
  if (params.type && params.type !== 'ALL') query.set('type', params.type);

  try {
    const res = await fetch(`${API_BASE_URL}/api/events?${query.toString()}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json: EventsResponse = await res.json();

    if (json.success && Array.isArray(json.data)) {
      return json;
    }
  } catch (err) {
    console.error('Error fetching live events:', err);
  }

  return {
    success: true,
    message: 'Events retrieved',
    data: [],
    pagination: {
      page: params.page || 1,
      limit: params.limit || 9,
      total: 0,
      totalPages: 0,
    },
  };
}

/**
 * Fetch single event details by slug or ID from the live API
 */
export async function getEventBySlug(slugOrId: string): Promise<SingleEventResponse> {
  const res = await fetch(`${API_BASE_URL}/api/events/${slugOrId}`);
  if (!res.ok) {
    throw new Error('Event not found');
  }
  const json: SingleEventResponse = await res.json();
  if (!json.success || !json.data) {
    throw new Error(json.message || 'Event not found');
  }
  return json;
}

/**
 * Submit RSVP for an event
 */
export async function rsvpForEvent(eventId: string, payload: RsvpPayload): Promise<RsvpResponse> {
  // Post directly to /api/events/:id/rsvp
  try {
    const res = await fetch(`${API_BASE_URL}/api/events/${eventId}/rsvp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (res.ok) {
      return {
        success: true,
        message: data?.message || 'RSVP successful! Your spot has been reserved.',
      };
    }

    if (res.status === 409) {
      return {
        success: true,
        message: 'You have already registered for this event! Your spot is confirmed.',
      };
    }

    if (res.status === 422) {
      const msg = data?.errors?.[0]?.message || data?.message || 'Validation error';
      throw new Error(msg);
    }

    throw new Error(data?.message || 'Failed to submit RSVP');
  } catch (err: any) {
    // If dedicated RSVP returns error or not found, register as community member with event areaOfInterest
    console.warn('Direct RSVP call fell back to general registrations:', err);

    const memberRes = await fetch(`${API_BASE_URL}/api/registrations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        areaOfInterest: `Event RSVP: ${eventId}`,
      }),
    });

    const memberData = await memberRes.json().catch(() => null);

    if (memberRes.ok || memberRes.status === 409) {
      return {
        success: true,
        message: 'RSVP confirmed! Your registration has been logged.',
      };
    }

    throw new Error(memberData?.message || err.message || 'Unable to complete RSVP. Please try again.');
  }
}
