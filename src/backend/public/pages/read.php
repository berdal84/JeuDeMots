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

$size = 0;
if( !Utils::getIntParamFromURL($size, 'size'))
{
    die("Unable to get size!");
}

$pages = new Pages();
$pages->size = $size;

if( !JokeCRUD::read_pages($pages) )
{
  echo( Response::failure(null)->json() );
  exit(0);
}
echo( Response::success($pages)->json() );

?>