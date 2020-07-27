<?php
// required headers
require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

// get posted data
$data = json_decode(file_get_contents("php://input"));

$sql = "UPDATE uploadedfiles 
            SET likes = likes + 1 
            WHERE id = $data->id" ;

$results = executeQuery($sql);

if ($results) { // si realizo la consulta 
    
    http_response_code(201);
    echo json_encode(array("message" => "TRUE"));
    
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Error"));
}

?>