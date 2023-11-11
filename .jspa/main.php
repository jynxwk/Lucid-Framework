<?php
include "./router.php";
$root = str_replace(".jspa/main.php", "", $_SERVER['PHP_SELF']);
$route = str_replace($root, "", $_SERVER['REQUEST_URI']);

$page = loadFile($route);

echo    '<head>
        <script>const root = "' . $root . '" </script>
        <script src="' . $root . '.jspa/script.js"></script>
        </head>';

echo $page;
?>