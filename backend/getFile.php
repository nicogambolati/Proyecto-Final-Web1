<?php
// required headers
require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

// Connected to DB
$sql = "SELECT uploadedfiles.description, uploadedfiles.url, uploadedfiles.id, Usuarios.name,  uploadedfiles.createdDate, Usuarios.lastName, uploadedfiles.likes, uploadedfilescomments.comment
    FROM uploadedfiles
    INNER JOIN Usuarios ON 
    uploadedfiles.userId = Usuarios.Id 
    LEFT JOIN uploadedfilescomments ON 
    uploadedfilescomments.fileId = uploadedfiles.id 
    ORDER BY uploadedfiles.createdDate desc";

// Traer los archivos del usuario activo.
$results = executeQuery($sql); // guardo el resultado de la consulta en un variable

$fileId = 0;

if ($results) { // si realizo la consulta 
    $rows = array();
    $file = array();

    while($r = mysqli_fetch_assoc($results)) { // recorre todos los resultados de la consulta
        // var_dump($r);

        if ($fileId !== $r['id']) {
            // Cambie de archivo.

            // Agrego el dato al output.
            $rows[] = $r; // guarda la fila en un array

            $fileId = $r['id'];

/* aray(8) {
  ["description"]=>
  string(11) "pepepepeppe"
  ["url"]=>
  string(27) "uploads/188057-img_7324.jpg"
  ["id"]=>
  string(2) "19"
  ["name"]=>
  string(7) "Nicolas"
  ["createdDate"]=>
  string(19) "2020-08-02 02:34:13"
  ["lastName"]=>
  string(9) "Gambolati"
  ["likes"]=>
  string(1) "4"
  ["comment"]=>
  string(18) "BUENAAAAARDOOO !!!"
} */

            $file = array(
                ['id'] => $r['id'],

            );

        }

        // Si tengo comentarios.

        // $rows[] = $r; // guarda la fila en un array
    }
    http_response_code(201);
    print json_encode($rows);
    
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Error al conectar"));
}

?>