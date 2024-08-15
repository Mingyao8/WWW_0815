<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mingyao";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$pwd = $_POST['pwd'];
$username = $_POST['username'];
$mail = $_POST['mail'];
$male = $_POST['male'];
$female = $_POST['female'];
$male = $_POST['male'];
if($male){
    $gender = 'male';
    echo 'male';
}
else if($female){
    $gender = 'female';
    echo 'male';
}

echo 'username : '.$username;
echo '<br>';
echo 'password : '.$pwd;
echo '<br>';
echo 'gender : '.$gender;
echo '<br>';
echo 'mail : '.$mail; 

$query  = "INSERT INTO user_info(`user_name`, `password`, `gender`, `mail`) VALUES ('$username','$pwd','$gender','$mail');";
$result =  mysqli_query($conn, $query);

if($result){
    echo '123';
}
header("Location: http://localhost/0807/0807_login.html"); 
mysqli_close($conn)
?>