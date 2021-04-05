import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Catalog } from './js/course-catalog.js';

function findCourse(title) {
  Catalog.courses.forEach(function(course) {
    if (course.courseTitle === title) {
      console.log(course);
      return course;
    }
  })
}

$(document).ready(function() {
  $("#submitcourse").click(function(event) {
    event.preventDefault();
    $("#formOne").hide();
    $("#submit").hide();

    const coursePicked = $("input:radio[name=courses]:checked").val();
    $("#results").show();
    $(".coursesPicked").text(JSON.stringify(findCourse(coursePicked)));
  });
});