<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mingyao";

    $conn = new mysqli($servername, $username, $password, $dbname);
    $ID = $_POST['ID'];//接收剛剛傳來的ID

    $query  = "UPDATE `feedback` SET `handle_ok` = 'OK' WHERE `ID` = '$ID';";//進行更新
    $result =  mysqli_query($conn, $query);

    if($result){
        header("Location: http://localhost/0807/get_feedback.html");    
    }
    mysqli_close($conn)
?>