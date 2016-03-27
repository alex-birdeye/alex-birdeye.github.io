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
$conn->set_charset("utf8");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$mysqltime = date_create()->format('"Y-m-d H:i:s"');

$id = '"' . $_POST["ik_pm_no"] . '"';
$clientname = '"' . $_POST["ik_x_clientname"] . '"';
$mail = '"' . $_POST["ik_cli"] . '"';
$clientphone = '"' . $_POST["ik_x_clientphone"] . '"';
$date = '"' . $_POST["ik_inv_prc"] . '"';
$status = '"' . $_POST["ik_inv_st"] . '"';

echo $mysqltime;

$sql_upd = 'UPDATE madewithlove_billings SET status=' . $status . ', date=' . $date . ' WHERE id=' . $id;

if ($conn->query($sql_upd) === TRUE) {
    echo "Record updated successfully";
    fwrite($myfile, "Record updated successfully");
} else {
    echo "Error updating record: " . $conn->error;
    fwrite($myfile, "UPD Error: " . $sql . "\n" . $conn->error);
}

$sql = "INSERT INTO madewithlove_billings (id, clientname, mail, clientphone, date, status)
VALUES ($id, $clientname, $mail, $clientphone, $date, $status)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    fwrite($myfile, "Error: " . $sql . "\n" . $conn->error);
}

$conn->close();
fclose($myfile);
?>