<?php

  $to = "info@indianwesteros.com";
  $body = "Name: " . $_POST['name']."\n";
  $body .= "Company: " . $_POST['company']."\n";
  $body .= "Email: " . $_POST['email']."\n";
  $body .= "Mobile: " . $_POST['mobile']."\n";
  $body .= "Message: " . $_POST['message']."\n";
  $headers = 'From: Customer Enquiry <cs@indianwesteros.com>' . "\r\n";
  $subject = "Customer Enquiry";

if(mail($to, $subject, $body, $headers)) {
    echo 'true';
}

else {
    echo 'false';
}

?>