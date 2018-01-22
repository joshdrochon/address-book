//business logic

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}


//ui logic

$(document).ready(function){
  $("#new-contact").submit(function(event){
    event.PreventDefault();

    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName = $("#new-last-name").val();

    var newContact = new Contact(firstName, lastName);

    $("ul#contacts").append("<li><span class='contact'>") + newContact.firstName + "</span>></li");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");


  });
});
