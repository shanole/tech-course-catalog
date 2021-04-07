import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { findCourse, makeEventLink } from './js/calendar-event.js';

function displayCourses() {
  const coursesRetrieved = localStorage.getItem("coursesPickedString").split(",");
  let confirmationDiv = $("div#confirmationDisplay");
  let htmlForCourseDisplay = "";
  for (let index = 0; index < coursesRetrieved.length; index ++) {
    let currentCourse = findCourse(coursesRetrieved[index]);
    let googleCalLink = makeEventLink(coursesRetrieved[index],"Google");
    let outlookCalLink = makeEventLink(coursesRetrieved[index], "Outlook");
    htmlForCourseDisplay += `<div>
    <h3>Course Name: ${currentCourse.courseTitle}</h3>
    <h3>Instructor: ${currentCourse.instructor}</h3>
    <h3>Dates: ${currentCourse.startDate} to ${currentCourse.endDate}</h3>
    <h3>Days: ${currentCourse.meetingDay}</h3>
    <h3>Time: ${currentCourse.startTime} - ${currentCourse.endTime}</h3>
    <h3>Location: ${currentCourse.location}</h3>
    <p>${currentCourse.description}</p>
    <button type="button" class="btn-primary" onclick="window.open('${googleCalLink}', '_blank')"><img src=assets/images/Google_Calendar_icon.png></button>
    <button type="button" class="btn-danger" onclick="window.open('${outlookCalLink}', '_blank')"><img src=assets/images/outlook_logo.png></button>
    <button type="button" class="btn-success" class="iCal" id="${index}" "><img src=assets/images/iCal_icon.png></button>
    </div>`;
  }
  confirmationDiv.html(htmlForCourseDisplay);
}

function iCalButtons() {
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
  iCalButtons();
});

// const nameRetrieved = localStorage.getItem("name")