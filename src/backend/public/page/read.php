<?php
/*
    Get a set of N jokes
*/

require_once('../../private/joke-crud.php');
require_once('../../private/utils.php');
require_once('../../private/models/response.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$id   = 0;
$size = 0;

if( !Utils::getIntParamFromURL($id, 'id'))
{
    die("Unable to get id!");
}

if( !Utils::getIntParamFromURL($size, 'size'))
{
    die("Unable to get size!");
}

$page = new Page($id, $size);

if( !JokeCRUD::read_page($page) )
{
  echo( Response::failure(null)->json() );
  exit(0);
}
echo( Response::success($page)->json() );

?>