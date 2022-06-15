<?php

//ensures there are no duplicates
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    exit;
}

//connect to database
include 'db_connection.php';

//get contents
$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

//decouple info
$message = $data->message;
$user = $data->user;



if($message === ''){ //if message is empty
    echo ("No message has been added");
} else {
    //if message is NOT empty
    $sql = "INSERT INTO posts (id, user, timestamp, message) VALUES (NULL, '$user', CURRENT_TIMESTAMP, '$message');";
    $result = mysqli_query($conn, $sql);
    
    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo "true";
    }

}



?>