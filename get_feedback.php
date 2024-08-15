<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mingyao";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$query  = "SELECT * FROM feedback;";
$result =  mysqli_query($conn, $query);
$data = array();
while($row = $result->fetch_assoc()){
    $data[] = $row;
}
print(json_encode($data));
mysqli_close($conn)
?>