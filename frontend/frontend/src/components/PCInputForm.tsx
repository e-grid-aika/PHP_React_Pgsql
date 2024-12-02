import type { FC } from "react";
import { useState } from "react";
import { TextField,
  MenuItem,
  Select,
  FormControl,
  Button,
  Box,
  SelectChangeEvent,
} from "@mui/material";

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

  const buttonStyle = {
    width: 300,
    margin: "0 auto",
  };

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
      <Box 
        p={2} 
        display="flex" 
        flexDirection="column" 
        gap={2}
        sx={{
          width: 400,
          margin: "0 auto",
        }}
      >
        <h1>入力フォーム(PC)</h1>
        <div className="inputPCForm">
          <Box display="flex" flexDirection="column" gap={2}>
            {[
              { label: "メーカー", name: "maker", type: "text" },
              { label: "機種名", name: "model", type: "text" },
              { label: "OS", name: "os", type: "text" },
              { label: "CPU", name: "cpu", type: "text" },
              { label: "メモリ", name: "memory", type: "text" },
              { label: "ディスク種", name: "disk", type: "text" },
              { label: "シリアル番号", name: "serialNumber", type: "text" },
              { label: "MACアドレス", name: "macAddress", type: "text" },
              { label: "ウィルスバスター", name: "virusSoft", type: "text" },
            ].map((field) => (
              <Box key={field.name} display="flex" alignItems="center" gap={2}>
                <label htmlFor={field.name} style={{ width: "300px", textAlign: "right" }}>
                  {field.label}：
                </label>
                <TextField
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  onChange={handleChange}
                  value={formValues[field.name as keyof TableRowProps] || ""}
                  size="small"
                  fullWidth
                />
              </Box>
            ))}
            
              <Box key="officeSoft" display="flex" alignItems="center" gap={2}>
                <label htmlFor="officeSoft" style={{ width: "160px", textAlign: "right" }}>Office：</label>
                <FormControl>
                  {/* <InputLabel>Office</InputLabel> */}
                  <Select
                    name="officeSoft"
                    onChange={handleChange}
                    value={String(formValues.officeSoft)}
                    size="small"
                    fullWidth
                  >
                    <MenuItem value="true">〇</MenuItem>
                    <MenuItem value="false">×</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {[
                { label: "設置場所", name: "instllationLocation", type: "text" },
                { label: "利用者", name: "user", type: "text" },
                { label: "所属", name: "affiliation", type: "text" },
                { label: "用途", name: "usage", type: "text" },
                { label: "破損状況・備考", name: "damageStatus", type: "text" },
                { label: "保管場所", name: "storingPlace", type: "text" },
              ].map((field) => (
                <Box key={field.name} display="flex" alignItems="center" gap={2}>
                  <label htmlFor={field.name} style={{ width: "300px", textAlign: "right" }}>
                    {field.label}：
                  </label>
                  <TextField
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    onChange={handleChange}
                    value={formValues[field.name as keyof TableRowProps] || ""}
                    size="small"
                    fullWidth
                  />
                </Box>
              ))}

              {[
                { label: "入替予定", name: "swapSchedule" },
                { label: "インターン", name: "internship" },
                { label: "売却対象", name: "saleTarget" },
                { label: "廃棄予定", name: "disposalSchedule" },
              ].map((field) => (
                <Box key={field.name} display="flex" alignItems="center" gap={2}>
                  <label htmlFor={field.name} style={{ width: "160px", textAlign: "right" }}>
                    {field.label}：
                  </label>
                  <FormControl>
                    <Select
                      id={field.name}
                      name={field.name}
                      onChange={handleChange}
                      value={String(formValues.swapSchedule)}
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="true">〇</MenuItem>
                      <MenuItem value="false">×</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              ))}
              {[
                { label: "導入日", name: "introductionDate", type: "Date", 
                  value: formValues.introductionDate
                    ? formValues.introductionDate.toISOString().split("T")[0] // YYYY-MM-DD に変換
                    : ""
                },
                { label: "経過年数", name: "elapsedYears", type: "number",
                  value: String(formValues.elapsedYears)
                },
                { label: "廃棄・返却日", name: "disposalReturnDate", type: "Date",
                  value: formValues.disposalReturnDate
                  ? formValues.disposalReturnDate.toISOString().split("T")[0] // YYYY-MM-DD に変換
                  : ""
                },
                { label: "リース管理番号", name: "managementNumber", type: "text",
                  value: formValues.managementNumber || ""
                },
              ].map((field) => (
                <Box key={field.name} display="flex" alignItems="center" gap={2}>
                  <label htmlFor={field.name} style={{ width: "300px", textAlign: "right" }}>
                    {field.label}：
                  </label>
                  <TextField
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    onChange={handleChange}
                    value={field.value}
                    size="small"
                    fullWidth
                    inputProps={{
                      min:0,
                    }}
                  />
                </Box>
              ))}
          </Box>
        </div>
        <Button style={buttonStyle} variant="contained" onClick={handleSubmit}>登録</Button>
      </Box>
    </>
  );
}