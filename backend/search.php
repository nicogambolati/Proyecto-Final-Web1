<?php
require_once('./utils/db.php');
require_once('./utils/cors.php');
enableCORS();

$searchTerm = $_GET['q'];

if (!empty($searchTerm)) {
    // Busco los archivos que cumplan el criterio de busqueda.
    $sql = "SELECT 
            uploadedfiles.id, 
            uploadedfiles.description, 
            uploadedfiles.url,
            uploadedfiles.createdDate, 
            uploadedfiles.likes, 
            Usuarios.name, 
            Usuarios.lastName, 
            uploadedfilescomments.comment,
            CommentUser.name as CommentUserName,
            CommentUser.lastName as CommentUserLastName
        FROM uploadedfiles
        INNER JOIN Usuarios ON 
        uploadedfiles.userId = Usuarios.Id 
        LEFT JOIN uploadedfilescomments ON 
        uploadedfilescomments.fileId = uploadedfiles.id 
        LEFT JOIN Usuarios CommentUser ON 
        uploadedfilescomments.userId = CommentUser.Id    
        WHERE uploadedfiles.url like '%$searchTerm%' or uploadedfiles.description LIKE '%$searchTerm%'
        ORDER BY uploadedfiles.createdDate desc";
    $results = executeQuery($sql);

    $fileId = 0;
    $comments = array();

    if ($results) { // si realizo la consulta 
        $rows = array();
        $file = array();
    
        while($r = mysqli_fetch_assoc($results)) { // recorre todos los resultados de la consulta
            if ($fileId !== $r['id']) {
                // Cambie de archivo.
    
                // Agrego el dato al output.
                if ($fileId !== 0) {
                    $file['comments'] = $comments;
                    $rows[] = $file; // guarda la fila en un array
                }
    
                $fileId = $r['id'];
                $comments = array();
                $file = array(
                    'id' => $r['id'],
                    'description' => $r['description'],
                    'url' => $r['url'],
                    'name' => $r['name'],
                    'createdDate' => $r['createdDate'],
                    'lastName' => $r['lastName'],
                    'likes' => $r['likes'],
                    'comments' => $comments
                );
            }
    
            // Si tengo comentarios, lo agrego al array.
            if ($r['comment']) {
                array_push($comments, array(
                    'comment' => $r['comment'],
                    'name' => $r['CommentUserName'],
                    'lastName' => $r['CommentUserLastName'],
                    // TODO: Agregar fecha
                ));
            }
        }
    
        // Agrega la ultima fila.
        $file['comments'] = $comments;
        $rows[] = $file; // guarda la fila en un array
    
        http_response_code(201);
        print json_encode($rows);
        
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Error al conectar"));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Parametros invalidos."));
}

