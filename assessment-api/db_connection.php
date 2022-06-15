
<?php

    //Link database to my app
    $dbhost = "localhost";
    $dbusername = "root";
    $dbpassword = "root";
    $dbname = "assessmentposts";

    //create connection to database
    $conn = new mysqli($dbhost, $dbusername, $dbpassword, $dbname);

    //if connection is unsuccessful
    if($mysqli -> connect_error){
        echo 'Failed to connect to Database: ' . $mysqli -> connect_error;
        exit();
    }

?>