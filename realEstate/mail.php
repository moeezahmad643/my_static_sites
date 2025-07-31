<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Adjust path if needed

// Show errors (for development only - remove on production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json");

// Check for POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['send' => 0, 'error' => 'Invalid request method']);
    exit;
}

// Validate required fields
$requiredFields = ['name', 'email', 'subject', 'service', 'message'];
foreach ($requiredFields as $field) {
    if (empty($_POST[$field])) {
        echo json_encode(['send' => 0, 'error' => "Missing field: $field"]);
        exit;
    }
}

// Collect form data
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = $_POST['subject'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.techkreative.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contact@techkreative.com';
    $mail->Password   = 'contactMail123';
    $mail->SMTPSecure = 'ssl'; // or 'tls' for port 587
    $mail->Port       = 465;

    // Sender and recipients
    $mail->setFrom('contact@techkreative.com', 'Website Contact');
    $mail->addAddress('contact@techkreative.com');
    $mail->addAddress('moiz27673855@gmail.com');
    $mail->addAddress('officials.tayyabakhan@gmail.com');

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission: $subject";
    $mail->Body    = "
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>phone:</strong> $phone</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    $mail->send();
    echo json_encode(['send' => 1]);
} catch (Exception $e) {
    echo json_encode(['send' => 0, 'error' => $mail->ErrorInfo]);
}
