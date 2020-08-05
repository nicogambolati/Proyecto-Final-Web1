<?php
// required headers
require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

// Connected to DB
$sql = "SELECT * FROM usuarios" ; 

$results = executeQuery($sql); // guardo el resultado de la consulta en un variable


if ($results) { // si realizo la consulta 
   
    $rows = array();
    while($r = mysqli_fetch_assoc($results)) { // recorre todos los resultados de la consulta
        $rows[] = $r; // guarda la fila en un array
    }
    http_response_code(201);
    print json_encode($rows);
    
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Error al conectar"));
}

?>
