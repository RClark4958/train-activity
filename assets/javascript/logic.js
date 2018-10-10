  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBf9bARdmnzSAH20NnxmOe6wfEJjxfRSaI",
    authDomain: "spaceghost-coast-to-coast.firebaseapp.com",
    databaseURL: "https://spaceghost-coast-to-coast.firebaseio.com",
    projectId: "spaceghost-coast-to-coast",
    storageBucket: "spaceghost-coast-to-coast.appspot.com",
    messagingSenderId: "782988371532"
  };
  
  firebase.initializeApp(config);

  var trainData = firebase.database();

  $("#addTrainBtn").on("click", function() {
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
    var frequency = $("#frequencyInput").val().trim();

    var newTrain = {
      name: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency
    }

    trainData.ref().push(newTrain);

    alert("Train Added!");

    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#firstTrainInput").val("");
    $("#frequencyInput").val("");

    
    return false;

  })