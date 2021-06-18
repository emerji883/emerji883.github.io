<?php
    $name = $POST['name'];
    $visitor_email = $POST['email'];
    $message = $POST['message'];


    $email_from = 'may@mayrealities.com';

    $email_subject = "Early Adopters Inquiry";

    $to = "info@mayrealities.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$headers);

    header("Location: earlyadopter.html");
?>