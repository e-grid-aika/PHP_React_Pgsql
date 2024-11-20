<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);

    $name = $input['name'] ?? null;
    $email = $input['email'] ?? null;

    if ($name && $email) {
        try {
            $dsn = "pgsql:host=database;port=5432;dbname=mydatabase;";
            $username = "myuser";
            $password = "mypassword";

            $pdo = new PDO($dsn, $username, $password, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            ]);

            $stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':email', $email);

            $stmt->execute();

            echo json_encode(["message" => "データが保存されました。"]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => "データベースエラー: " . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["error" => "無効な入力です。"]);
    }
}
