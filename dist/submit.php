<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = " moamen.wady@gmail.com";
$subject = "New Profile form submission: $name";

$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Message: $message\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
} else {
    echo "Failed to send message.";
}
exit();
?>