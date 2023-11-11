<?php
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data['route'])) {
    echo loadPage($data['route']);
}

function loadPage($request = "") {
    $dir = __DIR__ . "/../";
    $root = str_replace(".jspa/main.php", "", $_SERVER['PHP_SELF']);
    $request = str_replace($root, "", $request);
    $page = $dir . $request . "/index.html";

    if (file_exists($page)) {
        $page = file_get_contents($page);
        $page = $page . '<script>const root = "'. $root .'" </script>';
        $page = $page . '<script src="'. $root .'.jspa/script.js"></script>';
        return json_encode($page);
    }
}

?>