
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAQrmHX8bpyL39ccDq8P0rQmc85Y2Ziq88",
    authDomain: "employeeclassproject.firebaseapp.com",
    databaseURL: "https://employeeclassproject.firebaseio.com",
    projectId: "employeeclassproject",
    storageBucket: "employeeclassproject.appspot.com",
    messagingSenderId: "258953559325"
  };
  firebase.initializeApp(config);

$(document).ready(function() {
	$('#sections').on('click', 'button.submitButton', function() {
		console.log("Test");
	});

});