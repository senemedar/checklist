<?php

function getDataFromDatabase() {
    $servername = "localhost";
    $username = "sqladmin";
    $password = "31222646";
    $dbname = "todo_list";

    $conn = new mysqli($servername, $username, $password, $dbname);
    mysqli_set_charset($conn, 'utf8');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM todo_table";
    $result = $conn->query($sql);
    $retResult = $result->fetch_all();

    $conn->close();

    return $retResult;
}
