<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Content-Type');

// OPTIONSリクエストへの対応（プリフライトリクエスト）
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

// PostgreSQL接続設定
$host = 'postgres-db';
$dbname = 'equipment_db';
$port = '5432';
$user = 'postgres';
$db_password = 'postgres';

try {
    // PostgreSQLに接続
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname;port=$port", $user, $db_password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // POSTデータ取得
    $data = json_decode(file_get_contents('php://input'),true);
    

    $sql = "INSERT INTO pc_data (
      equipment_number, maker, model, os, cpu, memory, disk, serial_number, mac_address,
      virus_soft, office_soft, installation_location, pc_user, affiliation, usage_device,
      damage_status, storing_place, swap_schedule, internship, sale_target, disposal_schedule,
      introduction_date, elapsed_years, disposal_return_date, management_number, created_at, updated_at
    ) VALUES (
        :equipment_number, :maker, :model, :os, :cpu, :memory, :disk, :serial_number, :mac_address,
        :virus_soft, :office_soft, :installation_location, :pc_user, :affiliation, :usage_device,
        :damage_status, :storing_place, :swap_schedule, :internship, :sale_target, :disposal_schedule,
        :introduction_date, :elapsed_years, :disposal_return_date, :management_number, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    )";

    $stmt = $pdo->prepare($sql);

    // プレースホルダにデータをバインド
    $stmt->bindParam(':equipment_number', $data['equipmentNumber']);
    $stmt->bindParam(':maker', $data['maker']);
    $stmt->bindParam(':model', $data['model']);
    $stmt->bindParam(':os', $data['os']);
    $stmt->bindParam(':cpu', $data['cpu']);
    $stmt->bindParam(':memory', $data['memory']);
    $stmt->bindParam(':disk', $data['disk']);
    $stmt->bindParam(':serial_number', $data['serialNumber']);
    $stmt->bindParam(':mac_address', $data['macAddress']);
    $stmt->bindParam(':virus_soft', $data['virusSoft']);
    $stmt->bindParam(':office_soft', $data['officeSoft'], PDO::PARAM_BOOL);
    $stmt->bindParam(':installation_location', $data['installationLocation']);
    $stmt->bindParam(':pc_user', $data['pcUser']);
    $stmt->bindParam(':affiliation', $data['affiliation']);
    $stmt->bindParam(':usage_device', $data['usageDevice']);
    $stmt->bindParam(':damage_status', $data['damageStatus']);
    $stmt->bindParam(':storing_place', $data['storingPlace']);
    $stmt->bindParam(':swap_schedule', $data['swapSchedule'], PDO::PARAM_BOOL);
    $stmt->bindParam(':internship', $data['internship'], PDO::PARAM_BOOL);
    $stmt->bindParam(':sale_target', $data['saleTarget'], PDO::PARAM_BOOL);
    $stmt->bindParam(':disposal_schedule', $data['disposalSchedule'], PDO::PARAM_BOOL);
    $stmt->bindParam(':introduction_date', $data['introductionDate']);
    $stmt->bindParam(':elapsed_years', $data['elapsedYears'], PDO::PARAM_INT);
    $stmt->bindParam(':disposal_return_date', $data['disposalReturnDate']);
    $stmt->bindParam(':management_number', $data['managementNumber']);

    $stmt->execute();

    echo json_encode(['success' => true, 'message' => 'Data inserted successfully','data' => $data]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
}
?>
