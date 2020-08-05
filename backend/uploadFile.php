<?php

require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

$response = array();
$upload_dir = 'uploads/';
$server_url = 'http://127.0.0.1:8000';

// echo $_POST["description"];
// echo $_POST["userId"

if ($_FILES['file'] && $_POST["description"] && $_POST["userId"]) {
    $file_name = $_FILES["file"]["name"];
    $file_tmp_name = $_FILES["file"]["tmp_name"];
    $error = $_FILES["file"]["error"];

    if ($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    } else {
        $random_name = rand(1000,1000000)."-".$file_name;
        $upload_name = $upload_dir.strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
    
        if(move_uploaded_file($file_tmp_name , $upload_name)) {

            $userId = $_POST["userId"];
            $description = $_POST["description"];

            $sql = "INSERT INTO uploadedfiles (userId, url, description)
                VALUES ($userId, '$upload_name', '$description')";

            if (executeQuery($sql) === TRUE) {
                $response = array(
                    "status" => "success",
                    "error" => false,
                    "message" => "File uploaded successfully",
                    "url" => $upload_name
                );
            } else {
                $response = array(
                    "status" => "error",
                    "error" => true,
                    "message" => "Error saving the file in DB!"
                );
            }
        } else {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!"
    );
}

echo json_encode($response);
?>