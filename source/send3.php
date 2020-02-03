<?php
//$name = htmlspecialchars($_REQUEST['name'], ENT_QUOTES);
$phone = htmlspecialchars($_REQUEST['phone'], ENT_QUOTES);
$email = htmlspecialchars($_REQUEST['email'], ENT_QUOTES);
$hideValue = htmlspecialchars($_REQUEST['hide-input'], ENT_QUOTES);
$thanks_file = 'success.php';



if (!$errors) {
    $to = 'contact@grand-prix.com.ru';
    $header = 'MIME-Version: 1.0'."\r\n";
    $header .= 'Content-type: text/html; charset=utf-8'."\r\n";
    $header .= 'From: =?utf-8?b?'.base64_encode("Заявка на корм [$email]").'?= <no-reply@'.$_SERVER['HTTP_HOST'].'>'."\r\n";
    $header .= 'Заявка на корм ['.$email.']';

    $subject = 'Заявка на корм ['.$email.']';


    $msg = '<html>'."\n";
    $msg .= ' <head>'."\n";
    $msg .= ' <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'."\n";
    $msg .= ' </head>'."\n";
    $msg .= ' <body>'."\n";
    $msg .= ' <h2>Заявка на цену для корма</h2>'."\n";
    $msg .= ' <table cellpadding="5" cellspacing="0">'."\n";
    $msg .= ' <tr><td><strong>Телефон:</strong></td><td>'.$phone.'</td></tr>'."\n";
    $msg .= ' <tr><td><strong>Почта:</strong></td><td>'.$email.'</td></tr>'."\n";
    $msg .= ' <tr><td><strong>Название корма:</strong></td><td>'.$hideValue.'</td></tr>'."\n";
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
