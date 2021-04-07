import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { findCourse, makeEventLink } from './js/calendar-event.js';

function displayCourses() {
  const coursesRetrieved = localStorage.getItem("coursesPickedString").split(",");
  let confirmationDiv = $("div#confirmationDisplay");
  let htmlForCourseDisplay = "";
  for (let index = 1; index < coursesRetrieved.length; index ++) {
    let currentCourse = findCourse(coursesRetrieved[index]);
    let googleCalLink = makeEventLink(coursesRetrieved[index],"Google");
    let iCalLink = makeEventLink(coursesRetrieved[index],"iCalendar");
    let outlookCalLink = makeEventLink(coursesRetrieved[index], "Outlook");
    htmlForCourseDisplay += `<div>
    <h3>Course Name: ${currentCourse.courseTitle}</h3>
    <h3>Instructor: ${currentCourse.instructor}</h3>
    <h3>Dates: ${currentCourse.startDate} to ${currentCourse.endDate}</h3>
    <h3>Days: ${currentCourse.meetingDay} </h3>
    <h3>Time: ${currentCourse.startTime} - ${currentCourse.endTime} </h3>
    <h3>Location: ${currentCourse.location}</h3>
    <p>${currentCourse.description}</p>
    <button type="button" class="btn-primary" href="${googleCalLink}"><img src=assets/images/Google_Calendar_icon.png></button>
    <button type="button" class="btn-danger" href="${outlookCalLink}"><img src=assets/images/outlook_logo.png></button>
    <button type="button" class="btn-success" href="${iCalLink}"><img src=assets/images/iCal_icon.png></button>
    </div>`;
  }
  confirmationDiv.html(htmlForCourseDisplay);
}

$("#submitcourse").click(function(event) {
  event.preventDefault();
  $("#catalog").hide();
  $("#submit").hide();

  const name = $("input#name").val();
  localStorage.setItem("name", name);
  let coursesPicked = [$("input:radio[name=career]:checked").val()];
  $("input:checkbox[name=elective]:checked").each(function() {
    const electPick = $(this).val();
    coursesPicked.push(electPick);
  });
  $("input:checkbox[name=language]:checked").each(function() {
    const LangPick = $(this).val();
    coursesPicked.push(LangPick);
  });
  const coursesPickedString = coursesPicked.toString();
  localStorage.setItem("coursesPickedString", coursesPickedString);
});

$(document).ready(function() {
  if (window.location.pathname === '/confirmation.html') {
    displayCourses();
  }
});

// const nameRetrieved = localStorage.getItem("name");
