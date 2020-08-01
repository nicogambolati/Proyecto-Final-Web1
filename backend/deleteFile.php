<?php
require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

$fileID = $_GET['fileId'];

if (is_numeric($fileID)) {
    $sql = "DELETE FROM uploadedfiles WHERE uploadedfiles.id = $fileID";

    $results = executeQuery($sql); // guardo el resultado de la consulta en un variable

    http_response_code(400);

    if ($results) {
        // TODO: Borrar archivo.
        //unlink('Ruta d ela imagen.');
        http_response_code(201);
        print json_encode(true);
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Error al borrar la imagen."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Parametros invalidos."));
}

?>