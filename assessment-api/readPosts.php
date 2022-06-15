<?php 

//connect to database
include 'db_connection.php';

header('Access-Control-Origin: *');
header('Access-Control-Headers: *');

//get contents
$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

//decouple info
$username = $data->user;

if($username === ""){
    echo "";
} else {
    //select the posts of the active user
    $sql = "SELECT * FROM posts WHERE user = '$username';";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);
    

    if($resultCheck > 0){

        $emparray = array();
        // echo ($emparray);

        while($row = mysqli_fetch_assoc($result)){
            $emparray[] = $row;
        }

        echo json_encode($emparray);


    } else {
        echo "false";
    }
}
?>