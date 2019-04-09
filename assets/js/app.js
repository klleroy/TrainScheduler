/*
1. Input name of Train, Destination, Time (24H), & Freq in fields. <-- done.
2. Have information appear in same order on the Page and calc the minutes away
    a. Create DB to hold information <-- done
    b. Variables to hold information that will eventually display on the screen.
    c. We need to 
    c. We need to read in info into the DB and save it
    d. We need to extract and post to HTML
*/

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBYnc8j8pYiDuD3OPuvYVXDqImcVEQ_WSo",
    authDomain: "train-schedule-d3d15.firebaseapp.com",
    databaseURL: "https://train-schedule-d3d15.firebaseio.com",
    projectId: "train-schedule-d3d15",
    storageBucket: "train-schedule-d3d15.appspot.com",
    messagingSenderId: "154322965757"
};
firebase.initializeApp(config);
// A variable to reference the database.
const database = firebase.database();

// Initialize Variables
let trainName = "";
let trainDest = "";
let firstTrainTime = "";
let trainFreq = 0;

// function to get current time
function currentTime() {
    let current = moment().format('LT');
    $("#currentTime").html(current);
    setTimeout(currentTime, 1000);
};

// Add a new Train
$("#add-train").on("click", function (event) {
    event.preventDefault();
    // Grab values from text boxes
    trainName = $("#tn-input").val().trim();
    trainDest = $("#dest-input").val().trim();
    firstTrainTime = $("#ft-input").val().trim();
    trainFreq = parseInt($("#freq-input")).val().trim();
    // Push to the DB
    database.ref().push()({
        trainName = trainName,
        trainDest = trainDest,
        firstTrainTime = firstTrainTime,
        trainFreq = trainFreq,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

// child snapshot function.
database.ref().on("child_added", function (snapshot) {
    let minsAway;
    // First Time (pushed back 1 year to make sure it comes before current time)
    let firstTrain = moment(firstTime, "HH:mm").subtract(1, "years");
    // Difference between the current and firstTrain
    let 
});



// Minutes until next train

// Next train time

// Handle errors

// change HTML


// call back for current time function.
currentTime();
