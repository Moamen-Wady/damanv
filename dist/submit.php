<?php
// Retrieve form data from $_POST superglobal
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$activity = $_POST['activity'];
$residence = $_POST['residence'];
$notes = $_POST['notes'];

// Set recipient email address and email subject
$to = "info@damansolutions.com";
$subject = "New form submission: $name";

// Build email body with form data
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Activity: $activity\n";
$body .= "Number of Residence: $residence\n";
$body .= "Notes: $notes\n";

// Set email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
mail($to, $subject, $body, $headers);

// Redirect to thank-you page


header("Location: thankyou.html");

exit();
?>