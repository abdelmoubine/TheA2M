<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  // Get the form data
  $full_name = $_POST['full-name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Send an email with the form data
  $to = 'abdelmoubine@yandex.ru';
  $subject = 'New Contact Form Submission';
  $body = "Full Name: $full_name\nEmail: $email\nMessage: $message";
  $headers = "From: $email\r\n" .
             "Reply-To: $email\r\n" .
             "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
    echo 'Thank you for your message. We will be in touch shortly.';
  } else {
    // Email failed to send
    echo 'There was a problem sending your message. Please try again later.';
  }

} else {
  // Form was not submitted
  echo 'Invalid request';
}

?>
