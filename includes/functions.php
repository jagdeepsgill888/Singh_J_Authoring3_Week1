<?php
     // inculde the file we just wrote - connect
     include("connect.php"); // like A JS import statement

     $query = "SELECT * FROM profdata";

     $runQuery = $pdo->query($query);

     $result = array();

     while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
     }

    //  return $result;
     echo(json_encode($result)); // was var_dump but it didnt work
