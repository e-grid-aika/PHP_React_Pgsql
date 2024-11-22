import React, { useState, FormEvent } from 'react';
import { Button, TextField,styled } from "@mui/material";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface ApiResponse {
  success: boolean;
  error: boolean;
  message: string;
}

const InputForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData: FormData = {
      name: name,
      email: email,
      password: password
    };

    try{
      const response = await axios.post<ApiResponse>('http://localhost:8000/api/save.php',formData,{
        headers: {
          'Content-Type': 'application/json'
        }
      });


      // FIXME:デバッグ用
      console.log('Response:', response.data);

      if(response.data.success){
        alert('データが正常に登録されました');
      }else{
        alert('エラーが発生しました');
        console.error('サーバーエラー：',response.data.error);
      }
    }catch(error){
      console.error('エラー:',error);
    }
  };

  return(
    <Form onSubmit ={handleSubmit}>
      <TextField
        required
        id="outlined"
        label="名前"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <TextField
        required
        id="outlined-email" 
        label="メールアドレス"
        margin="normal" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <TextField
        required
        id="outlined-password"
        type='password'
        label="パスワード"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button 
        type='submit' 
        color="primary"
        variant="contained"
      >
          登録
      </Button>
    </Form>
  )

};

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: 300,
  margin: "0 auto",
});


export default InputForm;