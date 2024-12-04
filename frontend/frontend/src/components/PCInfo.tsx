import type { FC } from "react";
import React,{ useState,useEffect } from "react";
import axios from "axios";

interface PCInfo {
  equipment_number: string;
  maker: string;
  model: string;
  os: string;
  cpu: string;
  memory: string;
  disk: string;
  serial_number: string;
  mac_address: string;
  virus_soft: string;
  office_soft: boolean;
  installation_location: string;
  pc_user: string;
  affiliation: string;
  usage_device: string;
  damage_status: string;
  storing_place: string;
  swap_schedule: boolean;
  internship: boolean;
  sale_target: boolean;
  disposal_schedule: boolean;
  introduction_date: string;
  elapsed_years: Number;
  disposal_return_date: string;
  management_number: string;
}

// APIのレスポンス型の定義
interface ApiResponse{
  success: boolean;
  data: PCInfo[];
}

export const PCInfo: FC = () => {

  const [pcinfo, setPCInfo] = useState<PCInfo[]>([]);

  // ローディング状態
  const [loading, setLoading] = useState<boolean>(true);

  // エラーメッセージ
  const [error, setError] = useState<string | null>(null);

  const TABLE_HEAD = [
    // "設備番号",
    "メーカー",
    "機種名",
    "OS",
    "CPU",
    "メモリ",
    "ディスク種",
    "シリアル番号",
    "MACアドレス",
    "ウィルスバスター",
    "Office",
    "設置場所",
    "利用者",
    "所属",
    "用途",
    "破損状況・備考",
    "保管場所",
    "入替予定",
    "インターン",
    "売却対象",
    "廃棄予定",
    "導入日",
    "経過年数",
    "廃棄・返却日",
    "リース・管理番号",
  ];

  // 初回レンダリング時にデータを取得
  useEffect(() => {
    const fetchPCInfo = async () => {
      try {
        // APIからユーザー一覧を取得
        const response = await axios.get<ApiResponse>('http://localhost:8000/api/pc-info.php'); // PHPのエンドポイント
        if (response.data.success) {
          setPCInfo(response.data.data); // 成功したらユーザー一覧を保存
        } else {
          setError('データの取得に失敗しました。');
        }
      } catch (err) {
        setError('サーバーエラーが発生しました。');
      } finally {
        setLoading(false); // ローディング状態を解除
      }
    };

    fetchPCInfo();
  }, []);

    // ローディング中の表示
    if (loading) return <p>ロード中...</p>;

    // エラー発生時の表示
    if (error) return <p>{error}</p>;

  return (
    <>
      <div className=" ml-[50px] whitespace-nowrap overflow-auto h-[500px] w-[90%] mt-[100px] top-0">
        <h1>PC管理表</h1>
        <table className="table-auto">
          <thead className=" sticky top-0 z-10 ">
            <tr className="bg-gray-200">
              <th className="sticky left-0  bg-white border ">設備番号</th>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="px-4 py-2 border ">{head}</th>  
              ))}
            </tr>
          </thead>
          <tbody>
            {pcinfo.map((res, i) => {
              return (
                <tr key={i}>
                  <td className=" px-4 py-2 sticky left-0 z-[2] bg-slate-100 border ">
                    {res.equipment_number}
                  </td>
                  <td className=" px-4 py-2 border ">{res.maker}</td>
                  <td className=" px-4 py-2 border ">{res.model}</td>
                  <td className=" px-4 py-2 border ">{res.os}</td>
                  <td className=" px-4 py-2 border ">{res.cpu}</td>
                  <td className=" px-4 py-2 border ">{res.memory}</td>
                  <td className=" px-4 py-2 border ">{res.disk}</td>
                  <td className=" px-4 py-2 border ">{res.serial_number}</td>
                  <td className=" px-4 py-2 border ">{res.mac_address}</td>
                  <td className=" px-4 py-2 border ">{res.virus_soft}</td>
                  <td className=" px-4 py-2 border ">
                    {res.office_soft ? "〇" : "×"}
                  </td>
                  <td className=" px-4 py-2 border ">{res.installation_location}</td>
                  <td className=" px-4 py-2 border ">{res.pc_user}</td>
                  <td className=" px-4 py-2 border ">{res.affiliation}</td>
                  <td className=" px-4 py-2 border ">{res.usage_device}</td>
                  <td className=" px-4 py-2 border ">{res.damage_status}</td>
                  <td className=" px-4 py-2 border ">{res.storing_place}</td>
                  <td className=" px-4 py-2 border ">
                    {res.swap_schedule ? "〇" : "×"}
                    </td>
                  <td className=" px-4 py-2 border ">
                    {res.internship ? "〇" : "×"}
                  </td>
                  <td className=" px-4 py-2 border ">
                    {res.sale_target ? "〇" : "×"}
                  </td>
                  <td className=" px-4 py-2 border ">
                    {res.disposal_schedule ? "〇" : "×"}
                  </td>
                  <td className=" px-4 py-2 border ">{res.introduction_date}</td>
                  <td className=" px-4 py-2 border ">{res.elapsed_years.toString()}年</td>
                  <td className=" px-4 py-2 border ">{res.disposal_return_date}</td>
                  <td className=" px-4 py-2 border ">{res.management_number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};