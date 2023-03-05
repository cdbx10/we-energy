<?php
//incluir archivos



require 'includes/Exception.php';
require 'includes/PHPMailer.php';
require 'includes/SMTP.php';


//definir namespaces
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Crear instancia de php Mailer
$mail = new PHPMailer(true);

//set Mailer usando smtp

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    //set Mailer usando smtp
    $mail->isSMTP(); 
    //definir smtp host                                           
    $mail->Host       = 'c2210768.ferozo.com';
    //habilitar autenticacion smtp
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    //Habilitar tipo de encriptacion
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    //perto
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    //user
    $mail->Username   = 'info@weenergy.com.ar';                     //SMTP username
    //password
    $mail->Password   = 'Ener4321';                               //SMTP password

    //subject
    
    //Recipients
    $mail->setFrom('info@weenergy.com.ar', 'Mailer');
    $mail->addAddress('info@weenergy.com.ar', 'Joe User');     //Add a recipient


    //Attachments

    //Content
    $de=$_POST['nombre'];
    $telefono=$_POST['telefono'];
    $email= $_POST['mail'];
    $mensaje=$_POST['msg'];


    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Este es un correo desde el formualario del sitio web';
    $mail->Body    = '<b>Remitente:'. $de .'</b>  <br><b>Telefono:</b>'. $telefono .' <br><b>E-mail:</b>'. $email .' <br><b>Mensaje:</b>' .$mensaje;
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
$_POST = array();
$mail ->smtpClose();