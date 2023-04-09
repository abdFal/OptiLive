function kirim() {
  event.preventDefault();

  var fromName = document.getElementsByName("from_name")[0].value;
  var fromEmail = document.getElementsByName("from_email")[0].value;
  var templateParams = {
    to_name: "Optilife",
    from_name: fromName,
    from_email: fromEmail,
    subject: document.getElementsByName("subject")[0].value,
    message: document.getElementsByName("message")[0].value,
  };

  emailjs.send("service_mvjx9pg", "template_74cppyk", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      window.location.href = "../index.html";
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
