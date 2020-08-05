<?php

require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

$data = json_decode(file_get_contents("php://input"));

// TODO: Validar los otros datos.
if (!empty($data->name) && !empty($data->email) && !empty($data->password)) {
    $sql = "INSERT INTO usuarios (name,lastName, email, password) 
            VALUES ('$data->name','$data->lastName', '$data->email', '$data->password')";

    if (executeQuery($sql) === TRUE) {
        http_response_code(201);
        echo json_encode(array("message" => "User added."));
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "User didn't add."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Please specify User data. n: $data->name ln: $data->lastName e: $data->email P: $data->password"));
}