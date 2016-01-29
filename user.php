<?php
$data = json_decode(file_get_contents('php://input'), true);
if (empty($data['name'])) {
  header('HTTP/1.1 500 Internal Server Error');
} else {
    $data = array("name"=>$data['name'], "tel"=>$data['tel']);
    / データを取得し、登録処理を記述する。



    echo json_encode($data);
}

