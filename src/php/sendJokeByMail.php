
<?php

/**
 * This scripts send a Joke proposal by mail to contact@dalle-cort.fr
 * 
 * Prerequisites:
 * ==============
 * 
 * the body of the request should be a JSON with this form :
 * 
 * {
 * 		from: 'email@adress.com',
 * 		joke: {
 *      	category:   string,
 *      	text:       string,
 *      	author:     string,
 *      	date:       string        // 'yyyy-MM-dd' formatted
 * 		}
 * }
 * 
 */

// Get the JSON from the body of the post request
$rawData 	= file_get_contents('php://input');                   // Takes raw data from the request
$data 		= json_decode($rawData);

// Prepare the mail parameters
$to      = 'contact@dalle-cort.fr';
$subject = 'Joke Proposal';

$message  = '<html><body>';

$message .= '<h1>Nouvelle proposition de jeu de mot !</h1>';

$message .= '<h2>Jeu de mot</h2>';
$message .= '<p>Catégorie: ' . $data->joke->category . '</p>';
$message .= '<p>Texte: ' . $data->joke->text . '</p>';
$message .= '<p>Auteur: ' . $data->joke->author . '</p>';
$message .= '<p>Date: ' . $data->joke->date . '</p>';

$message .= '</body></html>';

$headers = array(
	'from'          => $data->from,
    'X-Mailer'      => 'PHP/' . phpversion(),
    'MIME-Version'  => '1.0',
	'Content-Type'  => 'text/html',
	'charset'       => 'utf-8'
);

// set the mail and echo a message in case of success / fail

if ( mail($to, $subject, $message, $headers) ) {
    echo "Mail sent !";
} else {
    die( "Mail sending failed !" );
}

?>
