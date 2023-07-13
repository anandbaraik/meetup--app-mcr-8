export const getFilteredEvents = (events, filter) => {
    if(filter === "Both") {
        return events;
    }
    return events.filter(({ eventType }) => eventType === filter);
};

export const getSearchedEvents = (events, search) => {
    if(search.trim().length === 0) {
        return events;
    }
    return events.filter((event) => {
        return event.title.toLowerCase().includes(search.toLowerCase()) ||
            event.eventTags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
    });
};

export const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata",
    });
};