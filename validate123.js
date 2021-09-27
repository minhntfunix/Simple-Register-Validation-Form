// function validate() {
//   var fullname = document.getElementById("fullname");
//   var name_message = fullname.parentElement.querySelector(".form-message");
//   var name_regex = /[0-9]/;

//   if (fullname.value == "") {
//     name_message.innerHTML = "Please enter fullname";
//     fullname.parentElement.classList.add("invalid");
//     console.log(name_message);
//     return false;
//   } else if (fullname.value.match(name_regex)) {
//     name_message.innerHTML = "Fullname can't contain numbers";
//     fullname.parentElement.classList.add("invalid");
//     console.log(name_message);
//     return false;
//   }
// }








function isValidName() {
  var fname = document.getElementById("fullname");

  var name_message = fname.parentElement.querySelector(".form-message");
  var name_regex = /[0-9]/;
  
    if (fname.value == "") {
      name_message.innerHTML = "Please enter fullname";
      fname.parentElement.classList.add("invalid");
     
      return false;
    } else if (fname.value.match(name_regex)) {
      name_message.innerHTML = "Fullname can't contain numbers";
      fname.parentElement.classList.add("invalid");
   
      return false;

    }else{
      name_message.innerHTML = "";
      fname.parentElement.classList.remove("invalid");
      return true;
    }

}

function isValidEmail(){
    var regex_mail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;;
    var email = document.getElementById("email");
    var email_message= email.parentElement.querySelector(".form-message");
    if (email.value == ''){

      email_message.innerHTML= "Please enter email";
      email.parentElement.classList.add("invalid");
      return false;

    }else if (!email.value.match(regex_mail)){

        email_message.innerHTML= "Format invalid";
        email.parentElement.classList.add("invalid");
        return false;

    }else{
      email_message.innerHTML= "";
      email.parentElement.classList.remove("invalid");
      return true;
    }
}

function isValidPassword(){
    var regex_pass= /^[a-zA-Z0-9!@#$%^&*]{6,}$/ ;
    var pass = document.getElementById("password");
    
    var pass_message= pass.parentElement.querySelector(".form-message");
    
    if (pass.value==''){
      pass_message.innerHTML= "Please enter password";
      pass.parentElement.classList.add("invalid");
      return false;
    }else if (!pass.value.match(regex_pass)){
      pass_message.innerHTML= "Password must be at least 6 characters";
      pass.parentElement.classList.add("invalid");
      return false;  
    }else{
      pass_message.innerHTML= "";
      pass.parentElement.classList.remove("invalid");
       return true;
    }
}

function isValidPassword2(){
  var regex_pass= /^[a-zA-Z0-9!@#$%^&*]{6,}$/ ;
  var pass = document.getElementById("password");
  var pass2 = document.getElementById("password_confirmation");
  var pass_message= pass2.parentElement.querySelector(".form-message");
  
  if (pass2.value==''){
    pass_message.innerHTML= "Please enter password";
    pass2.parentElement.classList.add("invalid");
    return false;
  }else if (!pass2.value.match(regex_pass)){
    pass_message.innerHTML= "Password must be at least 6 characters";
    pass2.parentElement.classList.add("invalid");
    return false;  
  }else if (pass2.value != pass.value){
    pass_message.innerHTML= "Password must match";
    pass2.parentElement.classList.add("invalid");
    return false;  
  }
  
  else{
    pass_message.innerHTML= "";
    pass2.parentElement.classList.remove("invalid");
     return true;
  }
  
}


function validate(){  
    if ( 
           ( isValidName() == false)
        || (isValidEmail() == false)
        || (isValidPassword() == false)
        ||  (isValidPassword2() == false)
    )
    
    {
      return false;
    }else{
     
      return true;
    }

   
}