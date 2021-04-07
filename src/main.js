import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { findCourse, makeEventLink } from './js/calendar-event.js';

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

// const nameRetrieved = localStorage.getItem("name");

function displayCourses() {
  const coursesRetrieved = localStorage.getItem("coursesPickedString").split(",");
  let htmlForCourseDisplay = "";
  coursesRetrieved.forEach(function(course) {
    // Create html to display details of each selected course in a box
    // Generate links
    let currentCourse = findCourse(course);
    let googleCalLink = makeEventLink(currentCourse,"Google");
    let iCalLink = makeEventLink(currentCourse,"iCalendar");
    let outlookCalLink = makeEventLink(currentCourse,"Outlook");
    htmlForCourseDisplay += `<h3>Course Name: ${currentCourse.courseTitle}</h3>
    <h3>Instructor: ${currentCourse.instructor}</h3>
    <h3>Dates: ${currentCourse.startDate} to ${currentCourse.endDate}</h3>
    <h3>Days: ${currentCourse.meetingDay} </h3>
    <h3>Time: ${currentCourse.startTime} - ${currentCourse.endTime} </h3>
    <h3>Location: ${currentCourse.location}</h3>
    <p>${currentCourse.description}</p>
    <button type="button" class="btn-primary" href="${googleCalLink}">Google</button>
    <button type="button" class="btn-danger" href="${outlookCalLink}">Outlook</button>
    <button type="button" class="btn-success" href="${iCalLink}">iCal</button>`;
  })
  //inject HTML into div in confirmation.html
}