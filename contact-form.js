
    function validation(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value
    

    if(name == ''){
      document.getElementById('name_error').innerHTML = "please enter your name"
      return false
    }else if(name.length<3){
      document.getElementById('name_error').innerHTML = " please enter a valid name"
      return false
    }
    else{
      document.getElementById('name_error').innerHTML = ""
      name = true
    }

   
    if(email == ''){
      document.getElementById('email_error').innerHTML = "please enter your email"
      return false
    }else if(email.length<5){
      document.getElementById('email_error').innerHTML = " please enter a valid email"
      return false
    }
    else{
      document.getElementById('email_error').innerHTML = ""
      email = true
    }


    if(message == ''){
      document.getElementById('message_error').innerHTML = "please enter any message"
      return false
    }else if(message.length<10){
      document.getElementById('message_error').innerHTML = " please enter atleast 10 characters"
      return false
    }
    else{
      document.getElementById('message_error').innerHTML = ""
      message = true
      // setTimeout(function() {window.location = "./page2/done.html" });
    }
  }
