import $ from 'jquery'; 
import { findCourse, makeEventLink } from './calendar-event.js';
import googleIcon from './../assets/images/Google_Calendar_icon.png';
import iCalIcon from './../assets/images/iCal_icon.png';
import outlookIcon from './../assets/images/outlook_logo.png';

function prettifyDays(dayArray) {
  let prettifiedDaysArray = [];
  dayArray.forEach(function(day) {
    if (day === "MO") {
      prettifiedDaysArray.push("Monday");
    } else if (day === "TU") {
      prettifiedDaysArray.push("Tuesday");
    } else if (day === "WE") {
      prettifiedDaysArray.push("Wednesday");
    } else if (day === "TH") {
      prettifiedDaysArray.push("Thursday");
    } else if (day === "FR") {
      prettifiedDaysArray.push("Friday");
    } else if (day === "SA") {
      prettifiedDaysArray.push("Saturday");
    } else {
      prettifiedDaysArray.push("Sunday");
    }
  });
  const days = prettifiedDaysArray.join(", ");
  return days;
}

export function displayCourses() {
  const coursesRetrieved = localStorage.getItem("coursesPickedString").split(",");
  let confirmationDiv = $("div#confirmationDisplay");
  let htmlForCourseDisplay = "";
  for (let index = 0; index < coursesRetrieved.length; index ++) {
    let currentCourse = findCourse(coursesRetrieved[index]);
    let googleCalLink = makeEventLink(coursesRetrieved[index],"Google");
    let outlookCalLink = makeEventLink(coursesRetrieved[index], "Outlook");
    htmlForCourseDisplay += `<div class="courseDisplay">
    <h3>Course Name: ${currentCourse.courseTitle}</h3>
    <h3>Instructor: ${currentCourse.instructor}</h3>
    <h3>Dates: ${currentCourse.startDate.slice(0, -6)} to ${currentCourse.endDate}</h3>
    <h3>Days: ${prettifyDays(currentCourse.meetingDays)}</h3>
    <h3>Time: ${currentCourse.startTime} - ${currentCourse.endTime}</h3>
    <h3>Location: ${currentCourse.location}</h3>
    <h3>${currentCourse.description}</h3>
    <button type="button" class="btn-primary" onclick="window.open('${googleCalLink}', '_blank')"><img src="${googleIcon}"></button>
    <button type="button" class="btn-danger" onclick="window.open('${outlookCalLink}', '_blank')"><img src="${outlookIcon}"></button>
    <button type="button" class="btn-success" class="iCal" id="${index}"><img src="${iCalIcon}"></button>
    </div>`;
  }
  confirmationDiv.html(htmlForCourseDisplay);
}

export function iCalButtons() {
  const coursesRetrieved = localStorage.getItem("coursesPickedString").split(",");
  let idsArray = [];
  for (let id = 0; id < coursesRetrieved.length; id ++) {
    idsArray.push(id);
  }
  idsArray.forEach(function(id) {
    $(`#${id}`).click(function() {
      let iCalLink = makeEventLink(coursesRetrieved[id],"iCalendar");
      iCalLink;
    });
  });
}