<?php
include "./router.php";
$root = str_replace(".jspa/main.php", "", $_SERVER['PHP_SELF']);
$route = str_replace($root, "", $_SERVER['REQUEST_URI']);

$response = loadPage($route);
$page = json_decode($response, true);

echo $page;
?>