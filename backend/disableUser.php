<?php
// required headers
require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

// get posted data
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->userId)) {
    // Connected to DB
    $sql = "UPDATE USUARIOS SET
            isActive = $data->isActive
            WHERE id = $data->userId" ; 

    if (executeQuery($sql) === TRUE) {
        http_response_code(201);
        print json_encode(true);
        
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Error al actualizar el usuario."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Please specify User data."));
}
?>
