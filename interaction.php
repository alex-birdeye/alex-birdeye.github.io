<?php

echo "Hello" . '<br />';

print_r($_POST);
$getvalue = print_r($_POST, 1);
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
fwrite($myfile, $getvalue);

echo '<br />' . "Bye";

$servername = "localhost";
$username = "jmuntik_test";
$password = "1qazxcvbn";
$dbname = "jmuntik_ik_test";

// Create connection
//$conn = new mysqli($servername, $username, $dbname);
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$mysqltime = date_create()->format('"Y-m-d H:i:s"');

$id = '"' . $_POST["ik_pm_no"] . '"';
$mail = '"' . $_POST["ik_x_clientmail"] . '"';
$date = '"' . $_POST["ik_inv_prc"] . '"';

echo $mysqltime;
$sql = "INSERT INTO billings (id, mail, date)
VALUES ($id, $mail, $date)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    fwrite($myfile, "Error: " . $sql . "<br>" . $conn->error);
}

$conn->close();
fclose($myfile);
?>