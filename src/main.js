import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { findCourse, makeEventLink } from './js/calendar-event.js';
import googleIcon from './assets/images/Google_Calendar_icon.png';
import iCalIcon from './assets/images/iCal_icon.png';
import outlookIcon from './assets/images/outlook_logo.png';

function displayCourses() {
  const coursesRetrieved = localStorage.getItem("coursesPickedString").split(",");
  console.log("courses array from local storage: "+ coursesRetrieved);
  let confirmationDiv = $("div#confirmationDisplay");
  let htmlForCourseDisplay = "";
  coursesRetrieved.forEach(function(course) {
    let currentCourse = findCourse(course);
    let googleCalLink = makeEventLink(course,"Google");
    let iCalLink = makeEventLink(course,"iCalendar");
    let outlookCalLink = makeEventLink(course, "Outlook");
    htmlForCourseDisplay += `<div>
    <h3>Course Name: ${currentCourse.courseTitle}</h3>
    <h3>Instructor: ${currentCourse.instructor}</h3>
    <h3>Dates: ${currentCourse.startDate} to ${currentCourse.endDate}</h3>
    <h3>Days: ${currentCourse.meetingDay} </h3>
    <h3>Time: ${currentCourse.startTime} - ${currentCourse.endTime} </h3>
    <h3>Location: ${currentCourse.location}</h3>
    <p>${currentCourse.description}</p>
    <button type="button" class="btn-primary" href="${googleCalLink}"><img src=${googleIcon} id="img1"></button>
    <button type="button" class="btn-danger" href="${outlookCalLink}"><img src=${outlookIcon} id="img1"></button>
    <button type="button" class="btn-success" href="${iCalLink}"><img src=${iCalIcon} id="img1"></button>
    </div>`;
  });
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
