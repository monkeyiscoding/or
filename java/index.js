

var messageCheck = localStorage.getItem("message");

if(messageCheck){
  $("#content").css("display","none");
  $("#sent-content").css("display","block");
}

$("#talk-button").click(function() {
  $("#contact-dialog").fadeIn();
  $("#contact-dialog").css("display", "flex");
});

$("#close-dialog").click(function() {
  $("#contact-dialog").fadeOut();
})

$("#close-dialog-2").click(function() {
  $("#contact-dialog").fadeOut();
})


$("#send").click(function() {


  var usernameError = $("#username-error");
  var emailError = $("#email-error");
  var messageError = $("#message-error");


  var key = firebase.database().ref("users").push().key;
  var dataref = firebase.database().ref("users/"+key);
  var name = $("#username");
  var email = $("#email");
  var message = $("#message");

  if (name.val().trim().length < 4) {
    usernameError.html("Username is to short");
    usernameError.fadeIn();


  } else if (email.val().trim().endsWith("@gmail.com") != true) {
    emailError.html("Invalid email address");
    emailError.fadeIn();

  }

  else if (message.val().trim().length < 10) {
    messageError.html("Message must be 10 character");
    messageError.fadeIn();

  }

  else{
    dataref.set({
      name : name.val(),
      email: email.val(),
      message: message.val()
    }, function(error){
      if(error){

      }

      else{
        $("#content").css("display","none");
        $("#sent-content").css("display","block");
        localStorage.setItem("message",true);
      }
    })
  }

})

$("#username").keypress(function(event) {


  var usernameError = $("#username-error");



  var dataref = firebase.database().ref("users");
  var name = $("#username");

  if (name.val().trim().length > 2) {
    usernameError.fadeOut();


  }


})

$("#email").keypress(function(event) {


  var emailError = $("#email-error");

  var email = $("#email");

  if (email.val().trim().endsWith("@gmail.co")) {
    emailError.fadeOut();


  }


})

$("#message").keypress(function(event) {


  var messageError = $("#message-error");

  var message = $("#message");

  if (message.val().trim().length >9) {
    messageError.fadeOut();


  }


})
