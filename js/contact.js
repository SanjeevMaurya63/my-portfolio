function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$("#contactForm").on("submit", function (event) {
  event.preventDefault();

  var formData = {
    fullName: $("#contactForm [name=fullName]").val(),
    email: $("#contactForm [name=email]").val(),
    subject: $("#contactForm [name=subject]").val(),
    message: $("#contactForm [name=message]").val()
  };

  console.log(formData)

  var valid = true;
  if (!formData.fullName) {
    $("#contactForm [name=fullName]").focus();
    valid = false;
  }

  if (!(formData.email && validateEmail(formData.email))) {
    $("#contactForm [name=email]").focus();
    valid = false;
  }

  if (!formData.message) {
    $("#contactForm [name=message]").focus();
    valid = false;
  }

  if (valid == false) {
    return;
  }

  console.log(formData)

  $("#contactForm [type=submit]").text("Sending..");
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/api/contact",
    contentType: "application/json",
    data: JSON.stringify(formData),
    dataType: "json"
  }).done(function (data) {
    $("#contactForm")[0].reset();
    $("#contactForm [type=submit]").text("Message Sent Successfully!");
    setTimeout(function () {
      $("#contactForm [type=submit]").text("Send");
    }, 4000);
  }).fail(function (xhr, status, error) {
    console.error("Error:", error);
    $("#contactForm [type=submit]").text("Failed! Try Again.");
    setTimeout(function () {
      $("#contactForm [type=submit]").text("Send");
    }, 4000);
  });
}); //end form submit handler

