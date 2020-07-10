<?php

function executeQuery($sql) {
    $server = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "final_web";
    $conn = new mysqli($server, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $results =  $conn->query($sql);
    $conn->close();

    return $results;
}