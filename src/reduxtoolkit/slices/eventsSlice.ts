import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Event {
  event_date_id: string;
  [key: string]: any; // Adjust this to the actual shape of your event object
}

interface EventsState {
  eventData: Event[];
  likedEvents: Event[];
}

const initialState: EventsState = {
  eventData: [],
  likedEvents: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    storeEvents(state, action: PayloadAction<{events: Event[]}>) {
      state.eventData = action.payload.events;
    },
    likeEvent(state, action: PayloadAction<string>) {
      const eventId = action.payload;
      const eventToLike = state.eventData.find(
        item => item.event_date_id === eventId,
      );
      if (eventToLike) {
        state.likedEvents.push(eventToLike);
      }
    },
    unlikeEvent(state, action: PayloadAction<string>) {
      const eventId = action.payload;
      state.likedEvents = state.likedEvents.filter(
        item => item.event_date_id !== eventId,
      );
    },
  },
});

export const {storeEvents, likeEvent, unlikeEvent} = eventSlice.actions;
export default eventSlice.reducer;
