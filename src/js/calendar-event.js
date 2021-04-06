import { GoogleCalendar, ICalendar, OutlookCalendar } from 'datebook';
import { Catalog } from './course-catalog.js';

function findCourse(title) {
  let selectedCourse;
  Catalog.courses.forEach(function(course) {
    if (course.courseTitle === title) {
      selectedCourse = course;
    }
  });
  return selectedCourse;
}

export function makeEventLink(courseTitle, calendarType) {
  let course = findCourse(courseTitle);
  let calendarEvent;
  let courseEvent = {
    title: course.courseTitle,
    description: course.description,
    location: course.location,
    start: new Date(course.startDate),
    end: new Date(course.startEndTime),
    recurrence: {
      frequency: course.recurrence,
      end: new Date(course.endDate),
      weekdays: course.meetingDays,
    }
  };
  if (calendarType === "Google") {
    let googleEvent = new GoogleCalendar(courseEvent);
    calendarEvent = googleEvent.render();
  } else if (calendarType === "iCalendar") {
    const iCalendarEvent = new ICalendar(courseEvent);
    calendarEvent = iCalendarEvent.download();
  } else {
    const outlookLiveCalendarEvent = new OutlookCalendar(courseEvent);
    calendarEvent = outlookLiveCalendarEvent.render();
  }
  return calendarEvent;
}