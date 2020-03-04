<?php

if (isset($_POST['submit'])){
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$phone = $_POST['phone'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];

	$mailTo = "greentouchbd@greentouchgroupbd.com";
	$headers = "From: ".$mailFrom;
	$txt = $message.".\n\n\nName: ".$name.".\nMobile: +88".$phone;

	if (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
		header("Location: ../contact?mail=invalid");
	}
	else{
		mail($mailTo, $subject, $txt, $headers);
		header("Location: ../contact?mail=sent");
	}
	

}