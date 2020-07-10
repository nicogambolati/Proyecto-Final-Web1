<?php
// required headers

require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

// get posted data
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if (!empty($data->email) && !empty($data->password)){
    // Connected to DB
    $sql = "SELECT * FROM USUARIOS WHERE email = '$data->email' AND password = '$data->password'";
    $results = executeQuery($sql);

    if ($results && $results->num_rows > 0) {
        http_response_code(201);
        echo json_encode(array("message" => "Log in success: " . $results->num_rows));
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Log in failed: " /*. $results->num_rows*/));
    }
} else {
    http_response_code(400);

    echo json_encode(array("message" => "Please provide user email and password."));
}




?>

