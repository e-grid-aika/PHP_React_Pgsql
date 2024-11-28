import type { FC, SetStateAction } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";

interface TableRow {
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

  const TABLE_ROWS: TableRow[] = [
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

  return (
    <>
      <div>
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
            {TABLE_ROWS.map((res, i) => {
              return (
                <tr key="{i}">
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
                  <td className=" px-4 py-2 border ">{res.officeSoft}</td>
                  <td className=" px-4 py-2 border ">{res.instllationLocation}</td>
                  <td className=" px-4 py-2 border ">{res.user}</td>
                  <td className=" px-4 py-2 border ">{res.affiliation}</td>
                  <td className=" px-4 py-2 border ">{res.usage}</td>
                  <td className=" px-4 py-2 border ">{res.damageStatus}</td>
                  <td className=" px-4 py-2 border ">{res.storingPlace}</td>
                  <td className=" px-4 py-2 border ">{res.swapSchedule}</td>
                  <td className=" px-4 py-2 border ">{res.internship}</td>
                  <td className=" px-4 py-2 border ">{res.saleTarget}</td>
                  <td className=" px-4 py-2 border ">{res.disposalSchedule}</td>
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
