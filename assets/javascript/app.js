// Steps to complete:

// 1. Initialize Firebase
//my firebase configuration data
var config = {
    apiKey: "",
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
var newTrain = $("#trainName").val().trim();
var newDestination = $("#destination").val().trim();
var newFirstTrainTime = $("#firstTime").val().trim();
var newFrequency = $("#frequency").val().trim();

var newTrains = {
    train: newTrain,
    desination: newDestination,
    firstTime: newFirstTrainTime,
    rate: newFrequency
  };

//is my new object working?
console.log(newTrains.train);

//the inputs will stay in the fields without being cleared if these lines are not included
$("#trainName").val("");
$("#destination").val("");
$("#firstTime").val("");
$("#frequency").val("");

database.ref().push(newTrains);
});

// 3. Create a way to retrieve trains from the database.
database.ref().on("child_added", function(childSnapshot) {

$("#trainName").text(snapshot.val().name);
$("#destination").text(snapshot.val().email);
$("#trainNa").text(snapshot.val().age);
$("#comment-display").text(snapshot.val().comment);
});

// 4. Create a way to calculate the months worked. Using difference between start and current time.



//    Then use moment.js formatting to set difference in months.



//adding the info to new rows
var newRow = $("<tr>").append(
    $("<td>").text(newTrain),
    $("<td>").text(newDesination),
    $("<td>").text(newFirstTrainTime),
    $("<td>").text(newFrequency),);