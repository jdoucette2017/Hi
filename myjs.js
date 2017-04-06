var provider = new firebase.auth.GoogleAuthProvider();
var user;

$( document ).ready(function() {
	$("#profile").show();
	$(".upload-group").hide();
	document.getElementById("upload").addEventListener('change', handleFileSelect, false);
});

function signIn(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    showWelcomeContainer();

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};

function showContainer(){
    $("#loginPage").hide();
    $("#profile").show();
    $("#name").html(user.displayName);
    $("#email").html(user.email);
}
