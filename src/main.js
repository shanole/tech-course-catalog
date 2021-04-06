import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import { Catalog } from './course-catalog.js';

// function displayClasses(coursesPicked) {
//   for (let i = 0; i <= 11; i++) {
//     if (coursesPicked === Catalog["courses"][i]["course-title"]) {
//       return Catalog["courses"][i];
//     }
//   }
// }

$(document).ready(function() {
  $("#submitcourse").click(function(event) {
    event.preventDefault();
    $("#catalog").hide();
    $("#submit").hide();

    const name = $("input#name").val();
    let careerPicked = $("input:radio[name=career]:checked").val();
    let electivePicked = $("input:radio[name=elective]:checked").val();
    let langsPicked = [];
    $("input:checkbox[name=language]:checked").each(function() {
      const pickLang = $(this).val();
      langsPicked.push(pickLang);
    });

    console.log(name);
    console.log(careerPicked);
    console.log(electivePicked);
    console.log(langsPicked);

    $("#results").show();
    //$(".coursesPicked").text(JSON.stringify(displayClasses(coursePicked)));
  });
});