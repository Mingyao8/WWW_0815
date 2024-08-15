<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mingyao";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    $user =  $_POST['username'];
    $date =  $_POST['date'];
    $context =  $_POST['context'];

    $query  = "INSERT INTO feedback(`user_name`, `date`, `context`, `handle_ok`) VALUES ('$user','$date','$context','NO');";
    $result =  mysqli_query($conn, $query);
    if($result){
        header("Location: http://localhost/0807/enter_feedback.html");    
    }
?>