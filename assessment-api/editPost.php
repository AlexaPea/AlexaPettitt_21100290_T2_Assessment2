<?php

//ensures no duplicates
if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

//connect to database
include 'db_connection.php';

//get content
$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

//initiate variables as fetched data
$updatePost = $data->newMessage;
$id = $data->id;

//update post
$sql = "UPDATE posts SET timestamp=CURRENT_TIMESTAMP, message='$updatePost' WHERE id = '$id';";

if(!result){
    echo("Err Desc: " . mysqli_error($conn))
}else{
    echo "The post was updated successfully";
}
?>