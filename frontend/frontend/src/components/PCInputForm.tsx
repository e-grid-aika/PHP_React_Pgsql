import type { FC, SetStateAction } from "react";
import { useState } from "react";
import { TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Box,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

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

interface InputFormProps {
  onAddRow: (newRow: TableRowProps) => void;
}

export const PCInputForm: FC<InputFormProps> = ({onAddRow}) => {
  const [formValues,setFormValues] = useState<Partial<TableRowProps>>({
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

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | SelectChangeEvent<string>
) => {
  if ("type" in e.target) {
    // HTMLInputElement, HTMLTextAreaElement, HTMLSelectElement の場合
    const { name, value, type } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]:
        type === "number" ? parseInt(value, 10) :
        type === "date" ? new Date(value) :
        ["officeSoft", "swapSchedule", "internship", "saleTarget", "disposalSchedule"].includes(name)
          ? JSON.parse(value)
          : value,
    }));
  } else {
    // Material-UI の SelectChangeEvent の場合
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]:
        ["officeSoft", "swapSchedule", "internship", "saleTarget", "disposalSchedule"].includes(name)
          ? JSON.parse(value)
          : value,
    }));
  }
};


  const handleSubmit = () => {
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
    onAddRow(newRow); //親コンポーネントに新しい行を渡す
    setFormValues({}); //フォームリセット
  };

  return (
    <>
      <Box p={2} display="flex" flexDirection="column" gap={2}>
        <h1>入力フォーム(PC)</h1>
        <div className="inputPCForm">
          <label htmlFor="maker">メーカー：</label>
          <TextField
            name="maker"
            type="text" 
            onChange={handleChange}
            value={formValues.maker || ""}
          />
          <br />
          <label htmlFor="model">機種名：</label>
          <TextField 
            name="model"
            type="text" 
            onChange={handleChange}
            value={formValues.model || ""}
          />
          <br />
          <label htmlFor="os">OS:</label>
          <TextField 
            name="os"
            type="text" 
            onChange={handleChange}
            value={formValues.os || ""}
          />
          <br />
          <label htmlFor="cpu">CPU:</label>
          <TextField
            name="cpu"
            type="text" 
            onChange={handleChange}
            value={formValues.cpu || ""}
          />
          <br />
          <label htmlFor="memory">メモリ:</label>
          <TextField 
            name="memory"
            type="text" 
            onChange={handleChange}
            value={formValues.memory || ""}
          />
          <br />
          <label htmlFor="disk">ディスク種:</label>
          <TextField 
            name="disk"
            type="text" 
            onChange={handleChange}
            value={formValues.disk || ""}
          />
          <br />
          <label htmlFor="serialNumber">シリアル番号:</label>
          <TextField 
            name="serialNumber"
            type="text" 
            onChange={handleChange}
            value={formValues.serialNumber || ""}
          />
          <br />
          <label htmlFor="macAddress">MACアドレス:</label>
          <TextField
            name="macAddress"
            type="text" 
            onChange={handleChange}
            value={formValues.macAddress || ""}
          />
          <br />
          <label htmlFor="virusSoft">ウィルスバスター:</label>
          <TextField 
            name="virusSoft"
            type="text" 
            onChange={handleChange}
            value={formValues.virusSoft || ""}
          />
          <br />
          <label htmlFor="officeSoft">Office:</label>
          <FormControl>
            {/* <InputLabel>Office</InputLabel> */}
            <Select
              name="officeSoft"
              onChange={handleChange}
              value={String(formValues.officeSoft)}
            >
              <MenuItem value="true">〇</MenuItem>
              <MenuItem value="false">×</MenuItem>
            </Select>
          </FormControl>
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
        <Button variant="contained" onClick={handleSubmit}>登録</Button>
      </Box>
    </>
  );
}