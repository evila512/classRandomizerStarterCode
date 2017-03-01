$(document).ready(function(){
$("#studentButton").click(function(){
var students = ["Evila", "Kaci", "Abby","Richard","Tim" ]
var rand = Math.floor(Math.random()*students.length);
console.log(rand);
console.log(students[rand])

});

$("#teacherButton").click(function(){
var teacher = ["Matt", "Sam", "Samuel","Trey"]
var rand = Math.floor(Math.random()*teacher.length);
console.log(rand);
console.log(teacher[rand])
});


});