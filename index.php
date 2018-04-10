<?php
$view_dir = 'views/';
require_once($view_dir.'header.phtml');
if(!isset($_GET['page'])) {
    $_GET['page'] = 'index';
}
$_GET['page'] = str_replace('.html','', $_GET['page']);
$_GET['page'] = preg_replace("/[^A-Za-z0-9 _]/", '', $_GET['page']);

if(file_exists($view_dir.$_GET['page'].'.phtml')) {
    require_once($view_dir.$_GET['page'].'.phtml');
}
else {
    require_once($view_dir.'404.phtml');
}
require_once($view_dir.'footer.phtml');
?>
