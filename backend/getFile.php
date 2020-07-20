<?php
// required headers
require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

// get posted data
$data = json_decode(file_get_contents("php://input"));

// Connected to DB
$sql = "SELECT uploadedfiles.description, uploadedfiles.url, uploadedfiles.id, Usuarios.name,  uploadedfiles.createdDate, Usuarios.lastName
    FROM uploadedfiles
    INNER JOIN Usuarios ON 
    uploadedfiles.userId = Usuarios.Id 
    ORDER BY createdDate desc";

// Traer los archivos del usuario activo.
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