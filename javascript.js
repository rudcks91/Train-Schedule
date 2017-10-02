  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBuadyF9aNQQ5k8DSmSP5OF6eizP89V_IY",
  authDomain: "train-time-96668.firebaseapp.com",
  databaseURL: "https://train-time-96668.firebaseio.com",
  projectId: "train-time-96668",
  storageBucket: "train-time-96668.appspot.com",
  messagingSenderId: "695002682765"
};
  firebase.initializeApp(config);
  var database = firebase.database();

var name = "";
var destination = "";
var firstTrain = "";
var frequency = "";

  $("#submit").on("click", function(event){
    event.preventDefault();

    // grabbe values from the text box
    name = $("#name").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#firstTrain").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref().push({
      name: name,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });

  database.ref().on("child_added", function(snapshot){
    newname = snapshot.val().name;
    newdestination = snapshot.val().destination;
    newfirstTrain = snapshot.val().firstTrain;
    newfrequency = snapshot.val().frequency;
    newMw = moment(newfirstTrain).toNow();

    var today = moment();
    var convertedDate = moment(newfirstTrain, "HH:mm")
    var nextArrival;
    var MinutesAway;

    $(".table").append('<tr>'+'<td>'+ newname +'</td>' + '<td>'+ newdestination +'</td>' + '<td>'+ newfrequency +'</td>' + '<td>' +nextArrival +'</td>'+'<td>'+ MinutesAway +'</td>'+'</tr>');}
    , function(errorObject){
      console.log("Errors handled: "+errorObject.code);
  });



