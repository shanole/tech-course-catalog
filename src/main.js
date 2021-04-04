import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Catalog } from './js/course-catalog.js';

function displayClasses(coursesPicked) {
  for (let i = 0; i <= 11; i++) {
    if (coursesPicked === Catalog.courses[i].courseTitle) {
      return Catalog.courses[i];
    }
  }
}

$(document).ready(function() {
  $("#submitcourse").click(function(event) {
    event.preventDefault();
    $("#formOne").hide();
    $("#submit").hide();

    const coursePicked = $("input:radio[name=courses]:checked").val();
    $("#results").show();
    $(".coursesPicked").text(JSON.stringify(displayClasses(coursePicked)));
  });
});