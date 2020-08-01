<?php
require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

$userID = $_GET['userId'];

if (is_numeric($userID)) {
    $sql = "DELETE FROM usuarios WHERE usuarios.id = $userID";

    $results = executeQuery($sql); // guardo el resultado de la consulta en un variable

    http_response_code(400);

    if ($results) {
        // TODO: Borrar archivo.
        //unlink('Ruta d ela imagen.');
        http_response_code(201);
        print json_encode(true);
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Error al borrar usuario."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Parametros invalidos."));
}

?>