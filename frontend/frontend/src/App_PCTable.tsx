import React, { useState } from "react";
import { PCInputForm } from "./components/PCInputForm";
import { PCTable } from "./components/PCTable";

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

export const App_PCTable: React.FC = () => {
  const [tableRows, setTableRows] = useState<TableRowProps[]>([]);

  const handleAddRow = (newRow: TableRowProps) => {
    setTableRows((prev) => [...prev, newRow]);
  };

  return (
    <div>
      <PCInputForm onAddRow={handleAddRow} />
      <PCTable tableRows={tableRows} />
    </div>
  );
};