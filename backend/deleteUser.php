<?php
require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

$userID = $_GET['userId'];

if (is_numeric($userID)) {
    // Borro los comentarios del usuario.
    $sql = "DELETE from uploadedfilescomments WHERE UserID = $userID;";
    $results = executeQuery($sql);

    // Borro los comentarios de los archivos del usuario.
    $sql = "DELETE from uploadedfilescomments where FileId In (SELECT id from uploadedfiles where UserId = $userID);";
    $results = executeQuery($sql);

    // Borro los archivos del usuario.
    $sql = "DELETE from uploadedfiles where UserId = $userID;";
    $results = executeQuery($sql);

    // Booro el usuario.
    $sql = "DELETE FROM usuarios WHERE usuarios.id = $userID;";
    $results = executeQuery($sql);
    
    if ($results) {
        // TODO: Borrar archivo.
        //unlink('Ruta d ela imagen.');
        http_response_code(201);
        print json_encode(true);
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Error al borrar usuario." . $results));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Parametros invalidos."));
}

?>