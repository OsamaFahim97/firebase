
function login()
{

  var useremail=document.getElementById('email').value;
  var pass=document.getElementById('pwd').value;
      window.alert('Hello' );
  firebase.auth().signInWithEmailAndPassword(useremail,pass).then( function(user){
    window.alert("Successfully created user account with uid:", useremail);
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
    window.alert(useremail+ 'Hello'+pass );
  // ...
});

}
