import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("#submitcourse").click(function(event) {
  event.preventDefault();
  $("#catalog").hide();
  $("#submit").hide();

  const name = $("input#name").val();
  localStorage.setItem("name", name);
  let classesPicked = [$("input:radio[name=career]:checked").val()];
  $("input:checkbox[name=elective]:checked").each(function() {
    const electPick = $(this).val();
    classesPicked.push(electPick);
  });
  $("input:checkbox[name=language]:checked").each(function() {
    const LangPick = $(this).val();
    classesPicked.push(LangPick);
  });
  const classesPickedString = classesPicked.toString();
  console.log(classesPickedString);
  localStorage.setItem("classesPickedString", classesPickedString);
});
//code to be used when it's time to get data back out of local storage
const classesRetrieved = localStorage.getItem("classesPickedString").split(",");
const nameRetrieved = localStorage.getItem("name");
console.log(localStorage.getItem(nameRetrieved));
// console.log(localStorage.getItem("classesPickedString"));
console.log(classesRetrieved);