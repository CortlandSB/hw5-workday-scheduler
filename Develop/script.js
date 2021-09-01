var saveBtn = $(".saveBtn");
var description = $(".description");

// Gives today's date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

console.log(saveBtn[0]);
console.log(description[0]);

saveBtn.click(function() {
    console.log(description.val());
});

// Look into .each() jQuery