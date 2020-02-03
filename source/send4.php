<?php
//$name = htmlspecialchars($_REQUEST['name'], ENT_QUOTES);
$name = htmlspecialchars($_REQUEST['userName'], ENT_QUOTES);
$whoAreYou = htmlspecialchars($_REQUEST['whoAreYou'], ENT_QUOTES);
$pet = htmlspecialchars($_REQUEST['pet'], ENT_QUOTES);
$type = htmlspecialchars($_REQUEST['type'], ENT_QUOTES);
$question = htmlspecialchars($_REQUEST['question'], ENT_QUOTES);
$batch = htmlspecialchars($_REQUEST['batch'], ENT_QUOTES);
$email = htmlspecialchars($_REQUEST['email'], ENT_QUOTES);
$phone = htmlspecialchars($_REQUEST['phone'], ENT_QUOTES);

$thanks_file = 'success.php';



if (!$errors) {
    $to = 'contact@grand-prix.com.ru';
    $header = 'MIME-Version: 1.0'."\r\n";
    $header .= 'Content-type: text/html; charset=utf-8'."\r\n";
    $header .= 'From: =?utf-8?b?'.base64_encode("Заявка Quiz [$email]").'?= <no-reply@'.$_SERVER['HTTP_HOST'].'>'."\r\n";
    $header .= 'Заявка Quiz ['.$email.']';

    $subject = 'Заявка Quiz ['.$email.']';


    $msg = '<html>'."\n";
    $msg .= ' <head>'."\n";
    $msg .= ' <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'."\n";
    $msg .= ' </head>'."\n";
    $msg .= ' <body>'."\n";
    $msg .= ' <h2>Заявка Quiz</h2>'."\n";
    $msg .= ' <table cellpadding="5" cellspacing="0">'."\n";
    $msg .= ' <tr><td><strong>Имя:</strong></td><td>'.$name.'</td></tr>'."\n";
    $msg .= ' <tr><td><strong>Кем является :</strong></td><td>'.$whoAreYou.'</td></tr>'."\n";
    $msg .= ' <tr><td><strong>Ищет корм для:</strong></td><td>'.$pet.'</td></tr>'."\n";
    $msg .= ' <tr><td><strong>Вид корма:</strong></td><td>'.$type.'</td></tr>'."\n";
    $msg .= ' <tr><td><strong>Партией:</strong></td><td>'.$batch.'</td></tr>'."\n";
    $msg .= ' <tr><td><strong>Email:</strong></td><td>'.$email.'</td></tr>'."\n";
    $msg .= ' <tr><td><strong>Телефон:</strong></td><td>'.$phone.'</td></tr>'."\n";
    $msg .= ' </table>'."\n";
    $msg .= ' </body>'."\n";
    $msg .= '</html>'."\n";

    if (mail($to, $subject, $msg, $header, '-fno-reply@'.$_SERVER['HTTP_HOST'])) {
        header('Location: ' . $thanks_file);
    } else {
        $output = '<p>Произошла ошибка, пожалуйста повторите попытку позже.</p>';
    }
}

print $output;
