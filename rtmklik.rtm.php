<?php
$substring = $ids[$id];
$id = $_GET['id'];
$ids = array(
          "TV1"=>"tv1",
          "TV Okey"=>"okey",
          "BERITA RTM"=>"berita",
          "DEWAN RAKYAT"=>"rakyat",
          "TV2"=>"tv2",
          "SUKAN RTM"=>"sukan",
          "TV6"=>"tv6",
          "DEWAN NEGARA"=>"negara",
        );
       
$url = "https://live02.gohkh9.eu.org/rtm/$ids[$id].m3u8";
header('Location:'.$url);
?>