// Steps to complete:

// 1. Initialize Firebase
//my firebase configuration data
var config = {
    apiKey: "AIzaSyCKEijfTTb02sNmfkPVZYvb-payQXI6dL0",
    authDomain: "my-project-da3e1.firebaseapp.com",
    databaseURL: "https://my-project-da3e1.firebaseio.com",
    projectId: "my-project-da3e1",
    storageBucket: "my-project-da3e1.appspot.com",
    messagingSenderId: "1028699486148"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// 2. Create button for adding new trains - then update the html + update the database

$("#submit").on("click", function(event) {
event.preventDefault();

//pull the values from the input boxes using the ids
var newTrain = $("#trainNameValue").val().trim();
var newDestination = $("#destinationValue").val().trim();
var newFirstTrainTime = moment($("#firstTimeValue").val().trim(), "MM/DD/YYYY").format("X");
var newFrequency = $("#frequencyValue").val().trim();

var newTrains = {
   train: newTrain,
    dest: newDestination,
    time: newFirstTrainTime,
    freq: newFrequency
  };

//is my new object working?
// console.log(newTrains.train);

database.ref().push(newTrains);

//the inputs will stay in the fields without being cleared if these lines are not included
$("#trainNameValue").val("");
$("#destinationValue").val("");
$("#firstTimeValue").val("");
$("#frequencyValue").val("");
});

// console.log(newTrains.train);
// console.log(newTrains.dest);
// console.log(newTrains.time);
// console.log(newTrains.freq);

// 3. Create a way to retrieve trains from the database.
database.ref().on("child_added", function(childSnapshot) {
console.log(childSnapshot.val());

var newTrain = childSnapshot.val().train;
var newDestination = childSnapshot.val().dest;
var newFirstTrainTime = childSnapshot.val().time;
var newFrequency = childSnapshot.val().freq;

// console.log("newtrain" + newTrain);
// console.log("newDestination" + newDestination);
// console.log("new time" + newFirstTrainTime);
// console.log("new frequency" + newFrequency);

// 4. Use moment to calculate train minutes away
var minutesAway = moment().diff(moment(newFirstTrainTime, "X"), "minutes");

//adding the info to new rows
var newRow = $("<tr>").append(
    $("<td>").text(newTrain),
    $("<td>").text(newDestination),
    $("<td>").text(newFirstTrainTime),
    $("<td>").text(newFrequency),
    $("<td>").text(minutesAway),
    );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});