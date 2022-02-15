import { DateTime } from 'luxon';


/**
 * Compares two events by the time of their first occurrence
 *
 * @param {Event} a the first event to compare
 * @param {Event} b the second event to compare
 * @returns {int} the sort order of the two events. -1 if a is first, 1 if b is first, 0 otherwise
 */
 function sortEventsByTime(a, b) {
  const timeA = a.Occurrences[0].StartDate;
  const timeB = b.Occurrences[0].StartDate;

  if (timeA < timeB) return -1;
  if (timeA > timeB) return 1;
  return 0;
}

/**
 * Gets all public events from the backend, and then formats and sorts them
 *
 * @returns {Promise<Event[]>} All events
 */
 const getPublicEvents = async () => {
  const response = await fetch("https://360api.gordon.edu/api/events/25Live/Public");
  const allPublic = await response.json();
  return allPublic.map((e) => formatevent(e)).sort(sortEventsByTime);
};

/**
 *  Format an event for display on the front end
 *
 * @param {Event} event The event to format
 * @returns {Event} The formatted event
 */
 function formatevent(event) {
  let formattedEvent = { ...event };
  if (event.Occurrences?.[0]) {
    const beginTime = DateTime.fromISO(event.Occurrences[0].StartDate).toFormat('t');
    const endTime = DateTime.fromISO(event.Occurrences[0].EndDate).toFormat('t');
    formattedEvent.timeRange = `${beginTime} - ${endTime}`;
    formattedEvent.date = DateTime.fromISO(event.Occurrences[0].StartDate).toFormat('LLL d, yyyy');
  }

  formattedEvent.title = event.Event_Title || event.Event_Name;

  formattedEvent.location = event.Occurrences?.[0]?.Location || 'No Location Listed';

  if (!formattedEvent.Description) {
    formattedEvent.Description = 'No description available';
  } else {
    // Remove markup from event description.
    formattedEvent.Description = formattedEvent.Description.replace(
      /&(#[0-9]+|[a-zA-Z]+);/g,
      ' ',
    ).replace(/<\/?[^>]+(>|$)/g, ' ');
  }

  return formattedEvent;
}

export { getPublicEvents };

