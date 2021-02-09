<?php
include "../php/database.php";

// GET variables
$api_key = $_GET['api_key'];

$data = getDataFromDatabase();

header('Content-Type: application/json');
echo json_encode($data);

if (isset($api_key)) {
    echo json_encode('API key detected: ' . $api_key);
}
