<?php
  require_once('core/user.php');
  require_once('core/response.php');
  require_once('core/user.php');
  
  User::session_start();

  header("Access-Control-Allow-Origin: ".ACCESS_CONTROL_ALLOW_ORIGIN);
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  switch( $_SERVER['REQUEST_METHOD'] )
  {
    case 'POST':
      $rawData 	= file_get_contents('php://input');
      $data 	= json_decode($rawData);
      if(!User::login($data->username, $data->password))
      {
        http_response_code(401);
        Response::failure("The couple username/password does not match with any valid account");
      }
      Response::success("Logged");

    case 'GET':
      if( !User::logout() )
      {
        http_response_code(500);
        Response::failure("Unable to logout");
      }
      Response::success("Disconnected");
  }

?>