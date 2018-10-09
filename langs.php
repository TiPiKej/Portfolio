<?php
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
switch ($lang){
    case "pl":
        include("index_pl.php");
        break;        
    default:
        include("index_en.php");
        break;
}
?>