<?php

//ensure there are no duplicates
if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

//connect to database
include 'db_connection.php';

//get contents
$request_body = file_get_contents('php://input');
$data = json_decode($request_body);


//decouple
$postId = $data->postId;

//delete post from posts table
$sql = "DELETE FROM posts WHERE id = '$postId'"
$result = mysqli_query($conn, $sql);

if(!result){
    echo("Err Desc: " . mysqli_error($conn))
}else{
    echo "The post was successfully deleted!";
}
?>