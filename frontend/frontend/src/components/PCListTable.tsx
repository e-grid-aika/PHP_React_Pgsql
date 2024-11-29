import type { FC, SetStateAction } from "react";
import { useState } from "react";

interface TableRowProps {
  equipmentNumber: string;
  maker: string;
  model: string;
  os: string;
  cpu: string;
  memory: string;
  disk: string;
  serialNumber: string;
  macAddress: string;
  virusSoft: string;
  officeSoft: boolean;
  instllationLocation: string;
  user: string;
  affiliation: string;
  usage: string;
  damageStatus: string;
  storingPlace: string;
  swapSchedule: boolean;
  internship: boolean;
  saleTarget: boolean;
  disposalSchedule: boolean;
  introductionDate: Date;
  elapsedYears: Number;
  disposalReturnDate: Date;
  managementNumber: string;
}

export const PCListTable: FC = () => {
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

  // 初期値
  const initialTableRows: TableRowProps[] = [
    {
      equipmentNumber: "SAMPLE001",
      maker: "DELL",
      model: "XXXX3300",
      os: "Windows11 Pro",
      cpu: "Core i5-XXXXU",
      memory: "16GB",
      disk: "SSD 512GB",
      serialNumber: "3413SSSS",
      macAddress: "AA:22:33:33:33:aa",
      virusSoft: "2655",
      officeSoft: true,
      instllationLocation: "本社",
      user: "ユーザー1",
      affiliation: "AAA",
      usage: "業務用",
      damageStatus: "ディスプレイにヒビあり",
      storingPlace: "ロッカー右下",
      swapSchedule: false,
      internship: false,
      saleTarget: false,
      disposalSchedule: false,
      introductionDate: new Date("2023-04-18"),
      elapsedYears: 1,
      disposalReturnDate: new Date("2023-04-18"),
      managementNumber: ""
    },
  ];

  // テーブルの状態を管理するステート
  const [tableRows, setTableRows] = useState<TableRowProps[]>(initialTableRows);

  // フォームの状態を管理するステート
  const [formValues, setFormValues] = useState<Partial<TableRowProps>>({
    equipmentNumber: "",
    maker: "",
    model: "",
    os: "",
    cpu: "",
    memory: "",
    disk: "",
    serialNumber: "",
    macAddress: "",
    virusSoft: "",
    officeSoft: true,
    instllationLocation: "",
    user: "",
    affiliation: "",
    usage: "",
    damageStatus: "",
    storingPlace: "",
    swapSchedule: true,
    internship: true,
    saleTarget: true,
    disposalSchedule: true,
    introductionDate: new Date(),
    elapsedYears: 0,
    disposalReturnDate: new Date(),
    managementNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type} = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]:
        type === "number" ? parseInt(value,10)
        : type === "date" ? new Date(value)
        : name === "officeSoft" || name === "swapSchedule" || name === "internship" || name === "saleTarget" || name === "disposalSchedule"
        ? JSON.parse(value) // selectボックスの場合
        : value, // その他は文字列 
    }));
  };

  const onClickAdd = () => {
    const newRow: TableRowProps = {
      equipmentNumber: formValues.equipmentNumber || "",
      maker: formValues.maker || "",
      model: formValues.model || "",
      os: formValues.os || "",
      cpu: formValues.cpu || "",
      memory: formValues.memory || "",
      disk: formValues.disk || "",
      serialNumber: formValues.serialNumber || "",
      macAddress: formValues.macAddress || "",
      virusSoft: formValues.virusSoft || "",
      officeSoft: formValues.officeSoft ?? true,
      instllationLocation: formValues.instllationLocation || "",
      user: formValues.user || "",
      affiliation: formValues.affiliation || "",
      usage: formValues.usage || "",
      damageStatus: formValues.damageStatus || "",
      storingPlace: formValues.storingPlace || "",
      swapSchedule: formValues.swapSchedule ?? true,
      internship: formValues.internship ?? true,
      saleTarget: formValues.saleTarget ?? true,
      disposalSchedule: formValues.disposalSchedule ?? true,
      introductionDate: formValues.introductionDate ? new Date(formValues.introductionDate) : new Date(),
      elapsedYears: formValues.elapsedYears || 0,
      disposalReturnDate: formValues.disposalReturnDate ? new Date(formValues.disposalReturnDate) : new Date(),
      managementNumber: formValues.managementNumber || "",
    };
    setTableRows((prev) => [...prev, newRow]);
    setFormValues({}); //フォームリセット
  }

  return (
    <>
      <div>
        <h1>入力フォーム(PC)</h1>
        <div className="inputPCForm">
          <label htmlFor="maker">メーカー：</label>
          <input
            name="maker"
            type="text" 
            onChange={handleChange}
            value={formValues.maker || ""}
          />
          <br />
          <label htmlFor="model">機種名：</label>
          <input 
            name="model"
            type="text" 
            onChange={handleChange}
            value={formValues.model || ""}
          />
          <br />
          <label htmlFor="os">OS:</label>
          <input 
            name="os"
            type="text" 
            onChange={handleChange}
            value={formValues.os || ""}
          />
          <br />
          <label htmlFor="cpu">CPU:</label>
          <input 
            name="cpu"
            type="text" 
            onChange={handleChange}
            value={formValues.cpu || ""}
          />
          <br />
          <label htmlFor="memory">メモリ:</label>
          <input 
            name="memory"
            type="text" 
            onChange={handleChange}
            value={formValues.memory || ""}
          />
          <br />
          <label htmlFor="disk">ディスク種:</label>
          <input 
            name="disk"
            type="text" 
            onChange={handleChange}
            value={formValues.disk || ""}
          />
          <br />
          <label htmlFor="serialNumber">シリアル番号:</label>
          <input 
            name="serialNumber"
            type="text" 
            onChange={handleChange}
            value={formValues.serialNumber || ""}
          />
          <br />
          <label htmlFor="macAddress">MACアドレス:</label>
          <input 
            name="macAddress"
            type="text" 
            onChange={handleChange}
            value={formValues.macAddress || ""}
          />
          <br />
          <label htmlFor="virusSoft">ウィルスバスター:</label>
          <input 
            name="virusSoft"
            type="text" 
            onChange={handleChange}
            value={formValues.virusSoft || ""}
          />
          <br />
          <label htmlFor="officeSoft">Office:</label>
          <select
            name="officeSoft"
            onChange={handleChange}
            value={String(formValues.officeSoft)}
          >
            <option value="true">〇</option>
            <option value="false">×</option>
          </select>
          <br />
          <label htmlFor="instllationLocation">設置場所:</label>
          <input 
            name="instllationLocation"
            type="text" 
            onChange={handleChange}
            value={formValues.instllationLocation || ""}
          />
          <br />
          <label htmlFor="user">利用者:</label>
          <input 
            name="user"
            type="text" 
            onChange={handleChange}
            value={formValues.user || ""}
          />
          <br />
          <label htmlFor="affiliation">所属:</label>
          <input 
            name="affiliation"
            type="text" 
            onChange={handleChange}
            value={formValues.affiliation || ""}
          />
          <br />
          <label htmlFor="usage">用途:</label>
          <input 
            name="usage"
            type="text" 
            onChange={handleChange}
            value={formValues.usage || ""}
          />
          <br />
          <label htmlFor="damageStatus">破損状況・備考:</label>
          <input 
            name="damageStatus"
            type="text" 
            onChange={handleChange}
            value={formValues.damageStatus || ""}
          />
          <br />
          <label htmlFor="storingPlace">保管場所:</label>
          <input 
            name="storingPlace"
            type="text" 
            onChange={handleChange}
            value={formValues.storingPlace || ""}
          />
          <br />
          <label htmlFor="swapSchedule">入替予定:</label>
          <select
            name="swapSchedule"
            onChange={handleChange}
            value={String(formValues.swapSchedule)}
          >
            <option value="true">〇</option>
            <option value="false">×</option>
          </select>
          <br />
          <label htmlFor="internship">インターン:</label>
          <select
            name="internship"
            onChange={handleChange}
            value={String(formValues.internship)}
          >
            <option value="true">〇</option>
            <option value="false">×</option>
          </select>
          <br />
          <label htmlFor="saleTarget">売却対象:</label>
          <select
            name="saleTarget"
            onChange={handleChange}
            value={String(formValues.saleTarget)}
          >
            <option value="true">〇</option>
            <option value="false">×</option>
          </select>
          <br />
          <label htmlFor="disposalSchedule">廃棄予定:</label>
          <select
            name="disposalSchedule"
            onChange={handleChange}
            value={String(formValues.disposalSchedule)}
          >
            <option value="true">〇</option>
            <option value="false">×</option>
          </select>
          <br />
          <label htmlFor="introductionDate">導入日:</label>
          <input 
            name="introductionDate"
            type="Date" 
            onChange={handleChange}
            value={
              formValues.introductionDate
                ? formValues.introductionDate.toISOString().split("T")[0] // YYYY-MM-DD に変換
                : ""
            }
          />
          <br />
          <label htmlFor="elapsedYears">経過年数:</label>
          <input 
            name="elapsedYears"
            type="number" 
            min={0} 
            onChange={handleChange}
            value={String(formValues.elapsedYears)}
          />
          <br />
          <label htmlFor="disposalReturnDate">廃棄・返却日:</label>
          <input 
            name="disposalReturnDate"
            type="Date" 
            onChange={handleChange}
            value={
              formValues.disposalReturnDate
                ? formValues.disposalReturnDate.toISOString().split("T")[0] // YYYY-MM-DD に変換
                : ""
            }
          />
          <br />
          <label htmlFor="managementNumber">リース管理番号:</label>
          <input 
            name="managementNumber"
            type="text" 
            onChange={handleChange}
            value={formValues.managementNumber || ""}
          />
        </div>
        <button onClick={onClickAdd}>登録</button>
      </div>
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
            {tableRows.map((res, i) => {
              return (
                <tr key={i}>
                  <td className=" px-4 py-2 sticky left-0 z-[2] bg-slate-100 border ">
                    {res.equipmentNumber}
                  </td>
                  <td className=" px-4 py-2 border ">{res.maker}</td>
                  <td className=" px-4 py-2 border ">{res.model}</td>
                  <td className=" px-4 py-2 border ">{res.os}</td>
                  <td className=" px-4 py-2 border ">{res.cpu}</td>
                  <td className=" px-4 py-2 border ">{res.memory}</td>
                  <td className=" px-4 py-2 border ">{res.disk}</td>
                  <td className=" px-4 py-2 border ">{res.serialNumber}</td>
                  <td className=" px-4 py-2 border ">{res.macAddress}</td>
                  <td className=" px-4 py-2 border ">{res.virusSoft}</td>
                  <td className=" px-4 py-2 border ">
                    {res.officeSoft ? "〇" : "×"}
                  </td>
                  <td className=" px-4 py-2 border ">{res.instllationLocation}</td>
                  <td className=" px-4 py-2 border ">{res.user}</td>
                  <td className=" px-4 py-2 border ">{res.affiliation}</td>
                  <td className=" px-4 py-2 border ">{res.usage}</td>
                  <td className=" px-4 py-2 border ">{res.damageStatus}</td>
                  <td className=" px-4 py-2 border ">{res.storingPlace}</td>
                  <td className=" px-4 py-2 border ">
                    {res.swapSchedule ? "〇" : "×"}
                    </td>
                  <td className=" px-4 py-2 border ">
                    {res.internship ? "〇" : "×"}
                  </td>
                  <td className=" px-4 py-2 border ">
                    {res.saleTarget ? "〇" : "×"}
                  </td>
                  <td className=" px-4 py-2 border ">
                    {res.disposalSchedule ? "〇" : "×"}
                  </td>
                  <td className=" px-4 py-2 border ">{res.introductionDate.toLocaleDateString()}</td>
                  <td className=" px-4 py-2 border ">{res.elapsedYears.toString()}年</td>
                  <td className=" px-4 py-2 border ">{res.disposalReturnDate.toLocaleDateString()}</td>
                  <td className=" px-4 py-2 border ">{res.managementNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
