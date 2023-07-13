
import {meetups} from "../assets/assets"
export const initialState = {
    events: meetups,
    filter: "Both",
    search: "",
};

export const appReducer = (state, action) => {
    switch (action.type) {
      case "SET_FILTER":
        return {
          ...state,
          filter: action.payload,
        };

      case "SET_SEARCH":
        return {
          ...state,
          search: action.payload,
        };

      case "MAKE_RSVP":
        return {
          ...state,
          events: state.events.map((event) =>
            event.id === action.payload ? { ...event, RSVP: true } : event
          ),
        };

      default:
        return;
    }
};