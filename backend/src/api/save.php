<?php

// CROS設定
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// OPTIONSリクエストへの対応（プリフライトリクエスト）
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

header('Content-Type: application/json');


// postgreSQL接続設定
$host = 'postgres-db';
$dbname = 'equipment_db';
$port = '5432';
$user = 'postgres';
$db_password = 'postgres';


try {
  // DB接続
  $pdo = new PDO("pgsql:host=$host;dbname=$dbname;port=$port", $user, $db_password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // POSTデータ取得
  $data = json_decode(file_get_contents('php://input'),true);

  //FIXME:デバッグ用ログ出力
  error_log(print_r($data,true));

  // 入力値を変数にセット
  $name = $data['name'];
  $email = $data['email'];
  $password = password_hash($data['password'], PASSWORD_DEFAULT);

  //SQLクエリ準備
  $sql = "INSERT INTO users (name,email,password) VALUES (:name, :email, :password)";
  $stmt = $pdo->prepare($sql);

  // プレースホルダーにデータをバインド
  $stmt->bindParam(':name', $name);
  $stmt->bindParam(':email', $email);
  $stmt->bindParam(':password', $password);

  // SQL実行
  if($stmt->execute()){
    echo json_encode(['success'=>true,'data'=>$data]);
  }else{
    echo json_encode(['success'=>false]);
  }
}catch(PDOException $e){
  // FIXME:開発用
  echo json_encode(['success'=>false, 'error'=>$e->getMessage()]);
  // 本番用
  // echo json_encode(['success'=>false, 'error'=>'データベースエラーが発生しました。']);
}
