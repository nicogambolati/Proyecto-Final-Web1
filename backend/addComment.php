<?php

require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

$data = json_decode(file_get_contents("php://input"));

// TODO: Validar los otros datos.
if (!empty($data->fileId) && !empty($data->comment) && !empty($data->userId)) {
    $sql = "INSERT INTO uploadedfilescomments (fileId, comment, userId) 
            VALUES ('$data->fileId','$data->comment', '$data->userId')";

    if (executeQuery($sql) === TRUE) {
        http_response_code(201);
        echo json_encode(array("message" => "Comment added."));
    } else {
        echo $sql;
        http_response_code(400);
        echo json_encode(array("message" => "Comment didn't add."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Please specify User data."));
}