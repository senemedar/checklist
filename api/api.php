<?php
include "../php/database.php";

// GET variables
$api_key = $_GET['api_key'];

$data = getDataFromDatabase();

header('Content-Type: application/json');

if (isset($api_key)) {
    if ($api_key == '112') {
        echo json_encode($data);
    } else {
        echo json_encode('Invalid API key');
        die();
    }
} else {
    echo json_encode('API key required');
    die();
}
