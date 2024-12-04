<?php
// エラーログ表示
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// CORS設定
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// PostgreSQL接続設定
$host = 'postgres-db';
$dbname = 'equipment_db';
$port = '5432';
$user = 'postgres';
$db_password = 'postgres';

try {
    // DB接続
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname;port=$port", $user, $db_password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // データベースからデータを取得
    $sql = "SELECT * FROM users";
    $stmt = $pdo->query($sql);

    // データを配列として取得
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // JSON形式でデータを返す
    echo json_encode(['success' => true, 'data' => $users]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

// エラー発生：{"success":false,"error":"could not find driver"}