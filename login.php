<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mingyao";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$pwd = $_POST['pwd'];
$username = $_POST['username'];

$query  = "SELECT `user_name`,`password` FROM user_info WHERE `user_name` = '$username' AND `password` = '$pwd';";
$result =  mysqli_query($conn, $query);
$followingdata = $result->fetch_array(MYSQLI_ASSOC);

if($followingdata['user_name'] == "mingyao"){
    echo 'OK';
    header("Location: http://localhost/0807/get_feedback.html"); 
}
else if(($followingdata['user_name'] != "mingyao") && ($followingdata['user_name'] == $username && $followingdata['password'] == $pwd)){
    foreach ($followingdata as $value) {
        echo $value, "\n";
        if(strlen($value) > 1){
            header("Location: http://localhost/0807/enter_feedback.html");
            break;
        }
        else{
            echo 'NO USER OR WRONG PASSWORD';
            break;
        }
    }
}
else{
    echo 'no user or pwd wrong';
}
mysqli_close($conn)
?>