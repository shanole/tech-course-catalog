import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { displayCourses, iCalButtons } from './js/dynamic-output.js';

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
  $('#userName').text(localStorage.getItem("name"));
  if (window.location.pathname === '/confirmation.html') {
    displayCourses();
  }
  iCalButtons();

  $('button#go-back').on('click', function(event) {
    event.preventDefault();
    window.history.back();
  });
});