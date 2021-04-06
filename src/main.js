import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("#submitcourse").click(function(event) {
  event.preventDefault();
  $("#catalog").hide();
  $("#submit").hide();

  const name = $("input#name").val();
  let careerPicked = $("input:radio[name=career]:checked").val();
  let electivePicked = [];
  $("input:checkbox[name=elective]:checked").each(function() {
    const electPick = $(this).val();
    electivePicked.push(electPick);
  });
  let langsPicked = [];
  $("input:checkbox[name=language]:checked").each(function() {
    const pickLang = $(this).val();
    langsPicked.push(pickLang);
  });
});