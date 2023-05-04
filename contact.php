<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Get the form fields and sanitize the input
  $name = filter_var($_POST["full-name"], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

  // Validate the input
  if (empty($name) || empty($email) || empty($message)) {
    echo "Please fill in all the fields.";
    exit;
  }

  // Send the email
  $to = "abdelmoubine@yandex.ru";
  $subject = "New message from your website";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for contacting us!";
  } else {
    echo "There was an error sending your message. Please try again later.";
  }
}
?>
